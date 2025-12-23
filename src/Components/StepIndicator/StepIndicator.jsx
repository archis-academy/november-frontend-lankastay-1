import React from "react";
import styles from "./StepIndicator.module.scss";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, icon: "/icons/StepIndicator/click.svg" },
    { id: 2, icon: "/icons/StepIndicator/click.svg" },
    { id: 3, icon: "/icons/StepIndicator/step-3.svg" },
  ];

  return (
    <div className={styles.stepIndicator}>
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep;

        return (
          <div className={styles.stepItem} key={step.id}>
            <div
              className={`${styles.stepCircle} ${
                isCompleted ? styles.completed : ""
              }`}
            >
              {isCompleted ? (
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
                  step.id < currentStep - 1 ? styles.completed : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;