import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import StepIndicator from "../../Components/StepIndicator/StepIndicator";
import PaymentScreen from "../../Components/PaymentScreen/PaymentScreen";
import Footer from "../../Components/Footer/Footer";
import styles from "./PaymentPage.module.scss";

const PaymentLayout = () => {
  const location = useLocation();

  const getStepFromPath = () => {
    if (location.pathname === "/booking") return 1;
    if (location.pathname.includes("/booking/payment")) return 2;
    if (location.pathname.includes("/booking/success")) return 3;
    return 1;
  };

  return (
    <>
      <header className={styles.PaymentHeader}>
        <div className={styles.logoWrapper}>
          <img src="/logo.svg" alt="Logo" className={styles.headerLogo} />
        </div>

        <div className={styles.stepWrapper}>
          <StepIndicator currentStep={getStepFromPath()} />
        </div>
      </header>

      <PaymentScreen />

      <Footer />
    </>
  );
};

export default PaymentLayout;