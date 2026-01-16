import styles from './Questions.module.scss';

const Questions = ({ question, isActive, onClick }) => {
  return (
    <p className={`${styles.item} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {question}
    </p>
  );
};

export default Questions;
