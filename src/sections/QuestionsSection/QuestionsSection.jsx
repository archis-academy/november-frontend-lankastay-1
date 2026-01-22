import { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData';
import Questions from '../../Components/questionsCard/Questions';
import styles from './QuestionsSection.module.scss';

const QuestionsSection = ({ dataName, title }) => {
  const [questions, setQuestions] = useState([]);
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  useEffect(() => {
    fetchData('questions').then((sections) => {
      const section = sections.find((s) => s[dataName]);
      const list = section?.[dataName] ?? [];

      setQuestions(list);

      if (list.length > 0) {
        setActiveQuestionId(list[0].id);
      }
    });
  }, [dataName]);

  const activeQuestion =
    questions.find((item) => item.id === activeQuestionId) ??
    questions[0] ??
    null;

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.layout}>
        <div className={styles.list}>
          {questions.map((item) => (
            <Questions
              key={item.id}
              question={item.question}
              isActive={item.id === activeQuestionId}
              onClick={() => setActiveQuestionId(item.id)}
            />
          ))}
        </div>

        <div className={styles.answerBox}>
          {activeQuestion && <p>{activeQuestion.answer}</p>}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
