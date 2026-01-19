import React from 'react';
import styles from './Setting.module.scss';

const Setting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.helpTitle}>Help</h2>
          <p className={styles.helpSubtitle}>What are you looking for?</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.section}>
            <label className={styles.label}>Your Profile Picture</label>
            <div className={styles.uploadBox}>
              <div className={styles.uploadContent}>
                <p>Upload your 
                  photo</p>
                <div className={styles.iconCircle}>
                  <img src="/icons/DashboardCard/gallery-add.svg" alt="Add Gallery" />
                </div>
              </div>
              <input type="file" className={styles.fileInput} accept="image/*" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Name</label>
              <div className={styles.inputField}>
                <input type="text" placeholder="Please enter your name" />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputField}>
                <input type="email" placeholder="Please enter your email" />
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Username</label>
              <div className={styles.inputField}>
                <input type="text" placeholder="Please enter your username" />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone Number</label>
              <div className={styles.inputField}>
                <input type="text" placeholder="Please enter your phone number" />
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Bio</label>
            <div className={styles.textAreaField}>
              <textarea 
                placeholder="Write your Bio here e.g your hobbies, interests ETC" 
                rows="5"
              ></textarea>
            </div>
          </div>

          <div className={styles.footer}>
            <button type="submit" className={styles.submitBtn}>Update Profile</button>
            <button type="button" className={styles.resetBtn}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;