// src/Components/inputComponent/Input.jsx
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './input.module.scss';

const Input = ({
  label,
  placeholder,
  type,
  id,
  className,
  inputClassName,
  name,
  value,
  onChange,
  onBlur,
  error,
  showError,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const normalizedType = (type || '').toLowerCase();
  const isPassword = normalizedType === 'password';
  const resolvedType = isPassword && showPassword ? 'text' : type || 'text';

  const inputClasses = classNames(style.input, inputClassName, {
    [style.hasError]: showError && error,
  });

  const inputProps = {
    id: id || name,
    name,
    className: inputClasses,
    type: resolvedType,
    placeholder,
    onChange,
    onBlur,
  };

  if (onChange && value !== undefined) {
    inputProps.value = value ?? '';
  }

  return (
    <div
      key={id}
      className={classNames(style.inputDiv, className, { [style.passwordField]: isPassword })}
    >
      <label htmlFor={name}>{label}</label>

      <div className={style.inputWrapper}>
        <input {...inputProps} />

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

      {showError && error && <p className={style.errorText}>{error}</p>}
    </div>
  );
};

export default Input;
