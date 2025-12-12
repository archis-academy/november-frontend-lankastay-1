// src/Components/inputComponent/Input.jsx
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './input.module.scss';

const Input = ({ label, placeholder, type, id, className, inputClassName, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div
      key={id}
      className={classNames(style.inputDiv, className, { [style.passwordField]: isPassword })}
    >
      <label htmlFor={name}>{label}</label>

      <div className={style.inputWrapper}>
        <input
          id={name}
          className={classNames(style.input, inputClassName)}
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
        />

        {isPassword && (
          <button
            type='button'
            className={style.toggleButton}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <img src={'/images/login-signup/passwordIcon.svg'} alt='' />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
