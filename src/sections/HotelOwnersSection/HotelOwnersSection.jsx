import React from 'react';
import SearchFilterBarDashboard from '../../Components/SearchFilterBarDashboard/SearchFilterBarDashboard';
import style from './HotelOwnersSection.module.scss';

const ownersData = [
  { id: 1, name: 'David Wagner', email: 'david_wagner@example.com', role: 'Super Admin', date: '24 Jun, 2023', status: 'active' },
  { id: 2, name: 'Ina Hogan', email: 'windler.warren@runte.net', role: 'Owner', date: '24 Aug, 2023', status: 'active' },
  { id: 3, name: 'Devin Harmon', email: 'wintheiser_enos@yahoo.com', role: 'Owner', date: '18 Dec, 2023', status: 'active' },
  { id: 4, name: 'Lena Page', email: 'camila_ledner@gmail.com', role: 'Pending', date: '8 Oct, 2023', status: 'pending' },
  { id: 5, name: 'Eula Horton', email: 'edula_dorton1221@gmail.com', role: 'Owner', date: '15 Jun, 2023', status: 'active' },
  { id: 6, name: 'Victoria Perez', email: 'terrill.wiza@hotmail.com', role: 'Owner', date: '12 July, 2023', status: 'active' },
];

const HotelOwnersSection = () => {
  return (
    <div className={style.container}>
      <div className={style.topHeader}>
        <h3>Admin Dashboard</h3>
      </div>

      <div className={style.searchArea}>

        <SearchFilterBarDashboard isAdmin />

        
      </div>

      <div className={style.listCard}>
        <h4 className={style.listTitle}>List Hotel Owners</h4>

        <div className={style.rowHeader}>
          <div className={style.colName}>Name</div>
          <div className={style.colRole}>Role</div>
          
          <div className={style.colDate}>Create Date</div>
          <div className={style.colAction}>Action</div>
        </div>

        <div className={style.listBody}>

          {ownersData.map((person) => (
            <div key={person.id} className={style.rowItem}>
              <div className={style.colName}>
                <div className={style.nameInfo}>
                  <span className={style.nameText}>{person.name}</span>
                  <span className={style.emailText}>{person.email}</span>
                </div>
              </div>

              <div className={style.colRole}>
                <span className={`${style.badge} ${person.role === 'Pending' ? style.grayBadge : style.blueBadge}`}>
                  {person.role}
                </span>
              </div>

              <div className={style.colDate}>{person.date}</div>

              <div className={style.colAction}>
                <button className={style.iconBtn}>
                  <img src="/icons/HotelOwners/pencil.svg" alt="Edit" />
                </button>

                <button className={style.iconBtn}>
                  <img src="/icons/HotelOwners/delete.svg" alt="Delete"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelOwnersSection;