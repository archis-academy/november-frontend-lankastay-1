import React from 'react';
import { SearchFilterBarIcons } from '../../../public/icons/search-filter-bar/Filter-Bar-Icons/SearchFilterBarIconsData';
import styles from './SearchFilterBar.module.scss';
import Button from '../Button/Button';

const SearchFilterBar = () => {
  return (
    <section>
      <div className={styles.searchFilterBar}>
        <div className={styles.searchFilterBarIcons}>
          {SearchFilterBarIcons.map((item) => (
            <div className={styles.IconDiv} key={item.id}>
              <div className={styles.selectContent}>
                <img src={item.iconUrl} alt={item.content} />
                <p>{item.content}</p>
              </div>
              <div>
                <select></select>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button text="Search"  />
        </div>
      </div>
    </section>
  );
};

export default SearchFilterBar;
