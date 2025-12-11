import React, { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData';
import Input from '../../Components/inputComponent/input';
import style from './registerAdmin.module.scss';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/footer/Footer';

const RegisterAdmin = () => {
  const [input, setInput] = useState([]);
  const [registerHotel, setRegisterHotel] = useState([]);

  useEffect(() => {
    fetchData('createAccountAdmin').then((data) => {
      setInput(data);
    });
    fetchData('registerHotel').then((data) => {
      setRegisterHotel(data);
    });
  }, []);

  return (
    <div>
      <div className={style.mainContainer}>
        <img className={style.headerLogo} src='/logo.svg' alt='' />
        <div className={style.container}>
          <div className={style.left}>
            <img src='/logo.svg' alt='' />
            {input.map((item) => (
              <Input
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                id={item.id}
                className={style.adminInputWrapper}
                inputClassName={style.adminInput}
              />
            ))}
          </div>
          <div className={style.right}>
            <h1>Register Your Hotel</h1>
            {registerHotel.map((item) => (
              <Input
                className={style.adminInputWrapper}
                inputClassName={style.adminInput}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                id={item.id}
              />
            ))}
            <Button text={'Register'} />
            <a href=''>Login</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterAdmin;
