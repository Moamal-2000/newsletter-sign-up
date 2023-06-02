import { createContext, useState } from "react";
import "./App.css";
import SignUpForm from "./Components/SignUpForm";
import ThankYou from "./Components/ThankYou";

export const emailValidationContext = createContext();

function App() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  return (
    <div className="App">
      <emailValidationContext.Provider
        value={{
          isEmailValid,
          setIsEmailValid,
          subscribeEmail,
          setSubscribeEmail,
        }}
      >
        {isEmailValid ? <ThankYou /> : <SignUpForm />}
      </emailValidationContext.Provider>
    </div>
  );
}

export default App;
