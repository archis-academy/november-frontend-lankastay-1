import React, { useEffect, useState } from 'react';
import Input from '../inputComponent/input';
import fetchData from '../../lib/fetchData';
import Button from '../Button/Button';
import style from './Login.module.scss';

const Login = () => {
  const [inputs, setInputs] = useState([]);
  const [inputsDetails, setInputsDetails] = useState([]);

  useEffect(() => {
    fetchData('loginAccount').then((data) => setInputs(data));
    fetchData('loginAccountDetail').then((logindata) => {
      setInputsDetails(logindata);
    });
  }, []);
  return (
    <form className={style.loginForm}>
      <h1 className={style.title}>Login Account</h1>
      {inputs.map((item) => {
        return (
          <div>
            <Input
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
              key={item.id}
            />
          </div>
        );
      })}
      {inputsDetails.map((detail) => {
        return (
          <div className={style.bottomForm}>
            <div className={style.checkboxDiv}>
              <input key={detail.id} type={detail.inputType} />
              <p>
                By signing up you agree to <a href=' '> terms and conditions </a> at zoho.
              </p>
            </div>

            {<Button className={style.button} text={detail.buttonText} />}
            <a className={style.inputText} href=''>
              {detail.bottomButtonText}
            </a>
          </div>
        );
      })}
    </form>
  );
};

export default Login;
