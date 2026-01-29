import React from 'react';
import styles from './quick_stats.module.scss';

function QuickStats({ number, content, iconUrl }) {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.iconCard}>
        <img src={iconUrl} alt={content} />
        <p>
          {number} <span>{content}</span>
        </p>
      </div>
    </div>
  );
}

export default QuickStats;
