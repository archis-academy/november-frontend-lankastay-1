import React, { useEffect, useState } from 'react';
import Input from '../inputComponent/input';
import fetchData from '../../lib/fetchData';
import Button from '../Button/Button';
import style from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

// Hata mesajları eklendi başarısız register işleminden sonra farklı sayfaya atmayacak artık.


const Login = ({ dataType, dataTypeDetail }) => {
  const [inputs, setInputs] = useState([]);
  const [inputsDetails, setInputsDetails] = useState([]);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const resolveAuthMode = (type) => {
    const normalized = (type || '').toLowerCase();
    if (normalized.includes('register') || normalized.includes('create')) return 'register';
    return 'login';
  };

  const activeDataType = dataType || 'loginAccount';
  const authMode = resolveAuthMode(activeDataType);
  const isRegister = authMode === 'register';
  const detailKey = dataTypeDetail || (isRegister ? 'registerAccountDetail' : 'loginAccountDetail');

  const resetFormState = (inputList = []) =>
    inputList.reduce((acc, { name }) => ({ ...acc, [name]: '' }), {});

  useEffect(() => {
    const loadInputs = async () => {
      try {
        const fetchedInputs = (await fetchData(activeDataType)) ?? [];
        setInputs(fetchedInputs);
        setForm(resetFormState(fetchedInputs));
        setFieldErrors({});
        setTouched({});
        setSubmitted(false);
      } catch (err) {
        setInputs([]);
        setForm({});
        setErrorMsg('Form yapilandirmasi yuklenemedi.');
      }
    };

    const loadInputDetails = async () => {
      try {
        const fetchedDetails = (await fetchData(detailKey)) ?? [];
        setInputsDetails(fetchedDetails);
      } catch (err) {
        setInputsDetails([]);
      }
    };

    setErrorMsg('');
    loadInputs();
    loadInputDetails();
  }, [activeDataType, detailKey]);

  const detailConfig =
    inputsDetails?.length > 0
      ? inputsDetails
      : [
          {
            id: 'default-detail',
            inputType: 'checkbox',
            buttonText: isRegister ? 'Register' : 'Login',
            bottomButtonText: isRegister ? 'Login' : 'Create an Account',
            hrefTo: isRegister ? '/login' : '/register',
          },
        ];

  const title = `${detailConfig[0]?.buttonText || (isRegister ? 'Register' : 'Login')} Account`;

  const requiredMessage = 'Bu alan zorunludur.';

  const validateField = (name, value) => {
    if (value === undefined || value === null || String(value).trim() === '') {
      return requiredMessage;
    }
    return '';
  };

  const validateForm = () => {
    const errors = {};
    inputs.forEach(({ name }) => {
      const error = validateField(name, form[name]);
      if (error) errors[name] = error;
    });
    setFieldErrors(errors);
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setFieldErrors((prev) => {
      const next = { ...prev };
      const error = validateField(name, value);
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setErrorMsg('');

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrorMsg('Lutfen zorunlu alanlari doldurun.');
      return;
    }

    try {
      setLoading(true);

      const email = form.email?.trim();
      const password = form.password;

      if (isRegister) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              role: 'user',
              name: form.name,
              phoneNo: form.phoneNo,
              country: form.country,
              nic: form.nic,
              username: form.username,
            },
          },
        });

        if (error) {
          setErrorMsg(error.message || 'Kayit basarisiz. Lutfen tekrar deneyin.');
          return;
        }

        navigate('/success-register', { state: { status: 'success' } });
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        const credentialMessage = 'E-posta veya sifre hatali.';
        setFieldErrors((prev) => ({
          ...prev,
          email: credentialMessage,
          password: credentialMessage,
        }));
        setErrorMsg('');
        return;
      }

      const role = data?.user?.user_metadata?.role || 'user';
      const target = role === 'admin' ? '/dashboard' : '/';
      navigate(target);
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.imageContainer}>
          <img src='/logo.svg' alt='' />
        </div>
      </div>

      <div className={style.right}>
        <form className={style.loginForm} onSubmit={handleSubmit}>
          <img className={style.formLogo} src='/logo.svg' alt='' />
          <h1 className={style.title}>{title} Account</h1>
          {inputs.map((item) => {
            const fieldError = fieldErrors[item.name];
            const showError = fieldError && (submitted || touched[item.name]);

            return (
              <div key={item.id}>
                <Input
                  id={item.id}
                  label={item.label}
                  placeholder={item.placeholder}
                  type={item.type}
                  name={item.name}
                  value={form[item.name] ?? ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={fieldError}
                  showError={!!showError}
                />
              </div>
            );
          })}

          {errorMsg && <p className={style.errorText}>{errorMsg}</p>}

          {detailConfig.map((detail) => (
            <div key={detail.id} className={style.bottomForm}>
              <div className={style.checkboxDiv}>
                <input type={detail.inputType} />
                <p>
                  By signing up you agree to <a href=' '>terms and conditions</a> at zoho.
                </p>
              </div>

              <Button
                className={style.button}
                text={loading ? 'Loading...' : detail.buttonText}
                type='submit'
                disabled={loading}
              />

              <Link className={style.inputText} to={detail.hrefTo}>
                {detail.bottomButtonText}
              </Link>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Login;
