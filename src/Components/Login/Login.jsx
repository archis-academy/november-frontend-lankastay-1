import React, { useEffect, useState } from 'react';
import Input from '../inputComponent/input';
import fetchData from '../../lib/fetchData';
import Button from '../Button/Button';
import style from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = ({ dataType, dataTypeDetail }) => {
  const [inputs, setInputs] = useState([]);
  const [inputsDetails, setInputsDetails] = useState([]);

  useEffect(() => {
    fetchData(dataType).then((data) => {
      setInputs(data);
    });
    fetchData(dataTypeDetail).then((logindata) => {
      setInputsDetails(logindata);
    });
  }, [dataType, dataTypeDetail]);
  const title = inputsDetails[0]?.buttonText || 'Login';

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.imageContainer}>
          <img src='/logo.svg' alt='' />
        </div>
      </div>
      <div className={style.right}>
        <form className={style.loginForm}>
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
              />
            </div>
          ))}

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
                <Link className={style.inputText} to={detail.hrefTo}>
                  {detail.bottomButtonText}
                </Link>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default Login;
