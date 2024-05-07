import { useState } from "react";
import { useEmailContext } from "../Context/emailContext";
import FeaturesList from "./FeaturesList";
import "./FormContent.css";

const FormContent = () => {
  const { setSubscribeEmail, setIsEmailValid, isEmailValid } =
    useEmailContext();
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [isLoaderActive, setIsLoaderActive] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (isLoaderActive) return;

    const emailInput = e.target.querySelector("input");
    const emailRegex = /\w+@\w+\.\w+/i;
    const isEmailValid = emailRegex.test(emailInput.value);

    if (isEmailValid) {
      emailInput.classList.remove("error");
      emailInput.classList.add("correct");

      setSubscribeEmail(emailInput.value);
      emailInput.setAttribute("disabled", true);

      loadingAnimation();
      return;
    }

    setIsEmailValid(false);
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailInput.removeAttribute("disabled");

    if (emailInput.value === "") {
      setEmailErrorMsg("Required field");
      return;
    }

    setEmailErrorMsg("Valid email required");
  }

  function loadingAnimation() {
    setIsLoaderActive(true);

    setTimeout(() => {
      setIsEmailValid(true);
      setIsLoaderActive(false);
    }, 3000);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Stay updated!</h2>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <FeaturesList />

      <div className="input">
        <input id="email" type="email" placeholder="email@company.com" />
        <label htmlFor="email">Email Address</label>
        {!isEmailValid && (
          <span className="error-message">{emailErrorMsg}</span>
        )}
        {isLoaderActive && <span className="loader" />}
      </div>

      <input type="submit" value="Subscribe to monthly newsletter" />
    </form>
  );
};

export default FormContent;
