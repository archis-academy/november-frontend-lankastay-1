import React, { useEffect, useState } from 'react';
import Input from '../inputComponent/input';
import fetchData from '../../lib/fetchData';
import Button from '../Button/Button';
import style from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const Login = ({ dataType, dataTypeDetail }) => {
  const [inputs, setInputs] = useState([]);
  const [inputsDetails, setInputsDetails] = useState([]);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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
      } catch () {
        setInputs([]);
        setForm({});
        setErrorMsg('Form configuration could not be loaded.');
      }
    };

    const loadInputDetails = async () => {
      try {
        const fetchedDetails = (await fetchData(detailKey)) ?? [];
        setInputsDetails(fetchedDetails);
      } catch () {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const email = form.email?.trim();
      const password = form.password;

      if (!email || !password) {
        setErrorMsg('Email and password are required.');
        return;
      }

      if (isRegister) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: form.name,
              phoneNo: form.phoneNo,
              country: form.country,
              nic: form.nic,
              username: form.username,
            },
          },
        });

        if (error) {
          navigate('/success-register', {
            state: { status: 'error', message: error.message },
          });
          return;
        }

        navigate('/success-register', { state: { status: 'success' } });
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      navigate('/');
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
          {inputs.map((item) => (
            <div key={item.id}>
              <Input
                id={item.id}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                value={form[item.name] ?? ''}
                onChange={handleChange}
              />
            </div>
          ))}

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
