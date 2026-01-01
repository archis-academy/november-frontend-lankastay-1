import React from 'react';
import styles from './ContactUs.module.scss';
import Button from '../Button/Button.jsx';

const ContactUs = () => {
  return (
    <div style={{ margin: '40px 0' }}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.contactUs}>
        <div className={styles.form}>
          <p className={styles.subtitle}>Do you have any question?</p>

          <form className={styles.formFields}>
            <div className={styles.inputWrapper}>
              <input type='text' placeholder='Name' />
              <span className={styles.required}>*</span>
            </div>

            <div className={styles.inputWrapper}>
              <input type='email' placeholder='Email' />
            </div>

            <div className={styles.inputWrapper}>
              <input type='text' placeholder='Phone number' />
              <span className={styles.required}>*</span>
            </div>

            <select>
              <option>How did you find us?</option>
              <option>Google</option>
              <option>Instagram</option>
              <option>Friend</option>
            </select>

            <textarea placeholder='Your message'></textarea>

            <div className={styles.ContactUsButton}>
              <Button text='SEND' />
            </div>
          </form>

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <img src='/icons/ContactUs/Phone.svg' alt='phone' />
              <div>
                <strong>PHONE</strong>
                <p>123 456 12</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <img src='/icons/ContactUs/Printer.svg' alt='fax' />
              <div>
                <strong>FAX</strong>
                <p>123 456 13</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <img src='/icons/ContactUs/Mail.svg' alt='email' />

              <div>
                <strong>EMAIL</strong>
                <p>info@lankastay.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.789323029014!2d30.49052017648418!3d39.78928309358828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15da185ded47%3A0x209b83f6999da29!2zWWXFn2lsdGVwZSwgxLBzbWV0IMSwbsO2bsO8LTIgQmx2IE5vOjIsIDI2MjEwIFRlcGViYcWfxLEvRXNracWfZWhpcg!5e0!3m2!1str!2str!4v1766433616585!5m2!1str!2str'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
