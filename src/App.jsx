import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 8,
    duration: 20,
  });

  function handleUserInput(inputIdentifier, userInputValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +userInputValue };
    });
  }

  const inputValidated =
    userInput.initialInvestment >= 1 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn >= 0 &&
    userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput} userInput={userInput} />
      {inputValidated ? (
        <Results input={userInput} />
      ) : (
        <p className="center">
          Please enter valid input. The values must be positive!
        </p>
      )}
    </>
  );
}

export default App;
