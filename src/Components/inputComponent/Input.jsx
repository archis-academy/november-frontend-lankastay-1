import React from 'react';
import style from "./input.module.scss"

const Input = ( {label, placeholder, type,id}) => {
  return (
    <div key={id} className={style.inputDiv}>
      <p>{label}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
