import React from "react";
import styles from "./ContactUs.module.scss";
import Button from '../Button/Button.jsx';


const ContactUs = () => {
    return (
        <div className={styles.contactUs}>


            <div className={styles.form}>
                <h2 className={styles.title}>Contact Us</h2>
                <p className={styles.subtitle}>Do you have any question?</p>

                <form className={styles.formFields}>
                    <input type="text" placeholder="Name *" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Phone number *" />

                    <select>
                        <option>How did you find us?</option>
                        <option>Google</option>
                        <option>Instagram</option>
                        <option>Friend</option>
                    </select>

                    <textarea placeholder="Your message"></textarea>

                    <div className={styles.ContactUsButton}>
                        <Button text="SEND" />
                    </div>

                </form>

                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <img src="/icons/Phone.svg" alt="phone" />
                        <div>
                            <strong>PHONE</strong>
                            <p>123 456 12</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <img src="/icons/Prienter.svg" alt="fax" />
                        <div>
                            <strong>FAX</strong>
                            <p>123 456 13</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <img src="/icons/Contactus/Mail.svg" alt="email" />
                        <div>
                            <strong>EMAIL</strong>
                            <p>info@lankastay.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.map}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48132.831217383144!2d28.825981999878028!3d41.062391930588056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caafe253f39f9b%3A0x349572fb9a436310!2sEsenler%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1765217812191!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    );
};

export default ContactUs;

