import React from 'react';
import styles from './StepIndicator.module.scss';

const StepIndicator = ({ currentStep, totalSteps = 3 }) => {
  return (
    <div className={styles.stepIndicator}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;

        return (
          <div key={step} className={styles.stepWrapper}>
            <div
              className={`${styles.step}
                ${step < currentStep ? styles.completed : ""}
                ${step === currentStep ? styles.active : ""}
              `}
            >
              {step < currentStep ? "✓" : step}
            </div>

            {step !== totalSteps && (
              <div
                className={`${styles.line} ${
                  step < currentStep ? styles.completed : ""
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