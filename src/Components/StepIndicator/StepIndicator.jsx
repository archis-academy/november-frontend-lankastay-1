import React from "react";
import styles from "./StepIndicator.module.scss";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1 },
    {
      id: 2,
      icon: "/icons/StepIndicator/step-2.svg",
    },
    {
      id: 3,
      icon: "/icons/StepIndicator/step-3.svg",
    },
  ];

  return (
    <div className={styles.stepIndicator}>
      {steps.map((step, index) => (
        <div className={styles.stepItem} key={step.id}>
          <div
            className={`${styles.stepCircle} ${
              currentStep > step.id || step.id === 1
                ? styles.completed
                : ""
            }`}
          >
            {currentStep > step.id || step.id === 1 ? (
              <img
                src="/icons/StepIndicator/check.svg"
                alt="completed"
                className={styles.checkIcon}
              />
            ) : (
              <img
                src={step.icon}
                alt={`step-${step.id}`}
                className={styles.stepIcon}
              />
            )}
          </div>

          {index !== steps.length - 1 && (
            <div
              className={`${styles.stepLine} ${
                currentStep > step.id || step.id === 1
                  ? styles.completed
                  : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;