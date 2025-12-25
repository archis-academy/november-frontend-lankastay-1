import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import StepIndicator from "../../Components/StepIndicator/StepIndicator";
import Footer from "../../Components/Footer/Footer";
import styles from "./BookingPage.module.scss";


const BookingLayout = () => {
  const location = useLocation();

  const getStepFromPath = () => {
    if (location.pathname === "/booking") return 1;
    if (location.pathname.includes("/booking/payment")) return 2;
    if (location.pathname.includes("/booking/success")) return 3;
    return 1;
  };

  return (
    <>
      <header className={styles.bookingHeader}>
        <div className={styles.logoWrapper}>
          <img src="/logo.svg" alt="Logo" className={styles.headerLogo} />
        </div>

        <div className={styles.stepWrapper}>
          <StepIndicator currentStep={getStepFromPath()} />
        </div>
      </header>
      
      <main className={styles.main}>
        <section className={styles.content}>
          <Outlet />
        </section>

        <aside className={styles.summary}>
          <h3></h3>
        </aside>
      </main>

      <Footer />
    </>
  );
};

export default BookingLayout;

