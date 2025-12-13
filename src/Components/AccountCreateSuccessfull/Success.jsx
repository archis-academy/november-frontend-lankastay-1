import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Success.module.scss';

const Success = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const status = state?.status || 'success';
  const message = state?.message;
  const isSuccess = status !== 'error';

  const title = isSuccess ? 'Account Created Successfully' : 'Account Creation Failed';
  const description = isSuccess
    ? 'Please check your email.'
    : message || 'Something went wrong. Please try again.';
  const iconSrc = isSuccess
    ? '/images/login-signup/check_circle.svg'
    : '/images/login-signup/error_circle.svg';
  const buttonText = isSuccess ? 'Login Now' : 'Back to Register';
  const buttonTarget = isSuccess ? '/login' : '/register';

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.logo} src='/logo.svg' alt='' />
        <img src={iconSrc} alt='' />

        <h1 className={!isSuccess ? styles.errorTitle : ''}>{title}</h1>
        <p className={!isSuccess ? styles.errorText : ''}>{description}</p>
        <div className={styles.buttonDiv}>
          <Button text={buttonText} onClick={() => navigate(buttonTarget)} />
        </div>
      </div>
    </div>
  );
};

export default Success;
