import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumb.module.scss';

const Breadcrumb = ({ currentPage }) => {
  const location = useLocation();
  const currentUrl = location.pathname.split("/").filter(item => item !== "" && !(Number(item)));

  const title = currentPage || currentUrl;

  return (
    <nav className={styles.breadcrumbNav} aria-label="breadcrumb">
      <div className={styles.container}>
        <ul className={styles.breadcrumbList}>
          
          <li className={styles.breadcrumbItem}>
            <Link to="/" className={styles.link}>Home</Link>
          </li>

          {title && (
            <>
              <li className={styles.breadcrumbItem}>
                <span className={styles.separator}>/</span>
              </li>
              <li className={styles.breadcrumbItem}>
                <span className={styles.active}>{title}</span>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;