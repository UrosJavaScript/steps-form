import { useState } from "react";

const messages = [
  "Basic Message ✨",
  "Apply for jobs 🙌",
  "Invest your new income 😃",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((prev) => prev - 1);
  }
  function handleNext() {
    if (step < 3) setStep((prev) => prev + 1);
  }

  return (
    <div className="container">
      <div className="wrapper-steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>

        <div className="buttons">
          <button
            className={`${step === 1 ? "disabled" : ""}`}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className={`${step === 3 ? "disabled" : ""}`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
