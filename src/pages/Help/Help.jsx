import QuestionsSection from '../../sections/QuestionsSection/QuestionsSection';
import styles from './Help.module.scss';

const Help = () => {
  const sections = [
    { key: 'general-questions', title: 'General Questions' },
    { key: 'Payment-Pricing', title: 'Payment & Pricing' },
    { key: 'Cancellations-Refunds', title: 'Cancellations & Refunds' },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Help</p>
        <p className={styles.subtitle}>What are you looking for?</p>
      </div>

      {sections.map((s) => (
        <QuestionsSection key={s.key} dataName={s.key} title={s.title} />
      ))}
    </div>
  );
};

export default Help;
