import React from 'react';
import styles from './breadcrumb.module.scss';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>

      <div className={styles.container}>
        
        <ol className={styles.breadcrumbList}>
          
          <li className={styles.breadcrumbItem}>
            <a href="/" className={styles.link}>Home</a>
          </li>

          <li className={styles.separator}>/</li>

          <li className={styles.breadcrumbItem}>
            <span className={styles.active}>Hotel Details</span>
          </li>
        </ol>

      </div>
    </nav>
  );
};

export default Breadcrumb;