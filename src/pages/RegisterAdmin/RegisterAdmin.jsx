import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fetchData from '../../lib/fetchData';
import Input from '../../Components/inputComponent/input';
import style from './registerAdmin.module.scss';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/footer/Footer';
import { supabase } from '../../lib/supabaseClient';

const requiredMessage = 'Bu alan zorunludur.';

const buildInitialState = (items = []) =>
  items.reduce((acc, item) => {
    if (!item?.name) return acc;
    return { ...acc, [item.name]: '' };
  }, {});

const RegisterAdmin = () => {
  const [adminFields, setAdminFields] = useState([]);
  const [hotelFields, setHotelFields] = useState([]);
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const [adminData = [], hotelData = []] = await Promise.all([
          fetchData('createAccountAdmin'),
          fetchData('registerHotel'),
        ]);
        setAdminFields(adminData);
        setHotelFields(hotelData);
        setForm(buildInitialState([...adminData, ...hotelData]));
        setFieldErrors({});
        setTouched({});
        setSubmitted(false);
        setErrorMsg('');
      } catch (err) {
        setAdminFields([]);
        setHotelFields([]);
        setForm({});
        setErrorMsg('Form verisi yuklenemedi.');
      }
    };

    load();
  }, []);

  const allFields = useMemo(() => [...adminFields, ...hotelFields], [adminFields, hotelFields]);

  const validateField = (field, value) => {
    if (!value || String(value).trim() === '') return requiredMessage;

    const type = field?.type?.toLowerCase();
    if (type === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(String(value).trim())) return 'Gecerli bir email girin.';
    }

    return '';
  };

  const validateForm = () => {
    const errors = {};
    allFields.forEach((field) => {
      if (!field?.name) return;
      const err = validateField(field, form[field.name]);
      if (err) errors[field.name] = err;
    });
    setFieldErrors(errors);
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setFieldErrors((prev) => {
      const next = { ...prev };
      const err = validateField(allFields.find((f) => f.name === name) || {}, value);
      if (err) next[name] = err;
      else delete next[name];
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(allFields.find((f) => f.name === name) || {}, value);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (err) next[name] = err;
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

    const email = form.email?.trim();
    const password = form.password;
    if (!email || !password) {
      setErrorMsg('Email ve sifre zorunludur.');
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: 'admin',
            ...form,
          },
        },
      });

      if (error) {
        setErrorMsg(error.message || 'Kayit basarisiz. Tekrar deneyin.');
        return;
      }

      navigate('/login', { replace: true, state: { registeredAs: 'admin' } });
    } catch (err) {
      setErrorMsg(err.message || 'Bir hata olustu.');
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field) => {
    const fieldError = fieldErrors[field.name];
    const showError = fieldError && (submitted || touched[field.name]);

    return (
      <Input
        key={field.id}
        name={field.name}
        id={field.id}
        label={field.label}
        placeholder={field.placeholder}
        type={field.type}
        className={style.adminInputWrapper}
        inputClassName={style.adminInput}
        value={form[field.name] ?? ''}
        onChange={handleChange}
        onBlur={handleBlur}
        error={fieldError}
        showError={!!showError}
      />
    );
  };

  return (
    <div>
      <div className={style.mainContainer}>
        <img className={style.headerLogo} src='/logo.svg' alt='' />
        <form className={style.container} onSubmit={handleSubmit}>
          <div className={style.left}>
            <img className={style.leftLogo} src='/logo.svg' alt='' />
            {adminFields.map(renderField)}
          </div>
          <div className={style.right}>
            <h1>Register Your Hotel</h1>
            {hotelFields.map(renderField)}
            {errorMsg && <p className={style.errorText}>{errorMsg}</p>}
            <Button text={loading ? 'Loading...' : 'Register'} type='submit' disabled={loading} />
            <Link to='/login'>Login</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterAdmin;
