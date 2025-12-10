import React from 'react';
import style from './input.module.scss';
import classNames from 'classnames';

const Input = ({ label, placeholder, type, id, className, inputClassName }) => {
  return (
    <div key={id} className={classNames(style.inputDiv, className)}>
      <p>{label}</p>
      <input className={inputClassName} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
