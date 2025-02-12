import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 8,
    duration: 20,
  });

  function handleUserInput(inputIdentifier, userInputValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: userInputValue };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleUserInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleUserInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleUserInput("expectedReturn", event.target.value)
            }
            require
            required
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) =>
              handleUserInput("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
