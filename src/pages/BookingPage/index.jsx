import { useState } from "react";
import StepIndicator from "../Components/StepIndicator/StepIndicator";

const BookingPage = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <StepIndicator currentStep={step} totalSteps={3} />

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setStep(step - 1)} disabled={step === 1}>
          Geri
        </button>

        <button onClick={() => setStep(step + 1)} disabled={step === 3}>
          İleri
        </button>
      </div>
    </>
  );
};

export default BookingPage;