import React from "react";
import Header from "../../Components/Header/Header";
import StepIndicator from "../../Components/StepIndicator/StepIndicator";
import PaymentScreen from "../../Components/PaymentScreen/PaymentScreen";
import Footer from "../../Components/Footer/Footer";
import styles from "./PaymentPage.module.scss";


const PaymentPage = () => {
  return (
    <>
      <header className={styles.paymentHeader}>
        <img
          src="/logo.svg"
          alt="Logo"
          className={styles.headerLogo}
        />
      </header>

      <section className={styles.stepWrapper}>
        <StepIndicator currentStep={2} />
      </section>

      <main className={styles.main}>
        <PaymentScreen />
      </main>

      <Footer />
    </>
  );
};

export default PaymentPage;