import "./StepIndicator.scss";

const StepIndicator = ({ currentStep, totalSteps = 3 }) => {
  return (
    <div className="step-indicator">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;

        return (
          <div key={step} className="step-wrapper">
            <div
              className={`step
                ${step < currentStep ? "completed" : ""}
                ${step === currentStep ? "active" : ""}
              `}
            >
              {step < currentStep ? "✓" : step}
            </div>

            {step !== totalSteps && (
              <div
                className={`line ${
                  step < currentStep ? "completed" : ""
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