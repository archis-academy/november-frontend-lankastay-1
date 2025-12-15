import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick, className, type = 'button', ...rest }) => {
  const combinedClass = [styles.btn, className].filter(Boolean).join(' ');

  return (
    <button className={combinedClass} onClick={onClick} type={type} {...rest}>
      {text}
    </button>
  );
};

export default Button;
