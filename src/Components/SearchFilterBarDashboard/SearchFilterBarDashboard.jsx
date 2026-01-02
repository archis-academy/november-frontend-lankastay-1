import style from './SearchFilterBarDashboard.module.scss';

const SearchFilterBarDashboard = () => {
  return (
    <div className={style.searchFilterBarDashboard}>
      <div className={style.searchBar}>
        <img src='../icons/search-filter-bar/Filter-Bar-Icons/search.svg' alt='' />
        <input type='text' placeholder='Search documents' />
      </div>
      <div className={style.filterBar}>
        <select name='' id=''>
          <option value=''>Sort By</option>
        </select>
        <a href=''>
          <img src='../icons/search-filter-bar/Filter-Bar-Icons/option.svg' alt='' />
        </a>
      </div>
    </div>
  );
};

export default SearchFilterBarDashboard;
