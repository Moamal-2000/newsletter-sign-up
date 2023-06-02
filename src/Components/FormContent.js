import { useContext, useRef, useState } from "react";
import { emailValidationContext } from "../App";
import "./FormContent.css";

const FormContent = () => {
  const emailData = useContext(emailValidationContext);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [isLoaderActive, setIsLoaderActive] = useState(false);
  const isAnimationStart = useRef(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (isAnimationStart.current) return;

    const emailInput = e.target.querySelector("input");
    const emailPattern = /\w+@\w+\.\w+/i;
    const emailValid = emailPattern.test(emailInput.value);

    if (emailValid) {
      setIsEmailValid(true);
      emailInput.classList.remove("error");
      emailInput.classList.add("correct");
      setIsLoaderActive(true);
      emailData.setSubscribeEmail(emailInput.value);
      emailInput.setAttribute("disabled", true);

      const promise = new Promise((res) => {
        isAnimationStart.current = true;
        setTimeout(() => res(), 3000);
      });

      promise.then(() => {
        emailData.setIsEmailValid(true);
        setIsLoaderActive(false);
        isAnimationStart.current = false;
      });
    } else {
      emailData.setIsEmailValid(false);
      setIsEmailValid(false);
      emailInput.classList.add("error");
      emailInput.classList.remove("correct");
      emailInput.removeAttribute("disabled");

      if (emailInput.value === "") {
        console.log(isEmailValid);
        setEmailErrorMsg("Required field");
        return;
      }

      setEmailErrorMsg("Valid email required");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Stay updated!</h2>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className="list">
        <li>
          <img src={require("./images/icon-list.svg").default} alt="" />
          <p>Product discovery and building what matters</p>
        </li>
        <li>
          <img src={require("./images/icon-list.svg").default} alt="" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li>
          <img src={require("./images/icon-list.svg").default} alt="" />
          <p>And much more!</p>
        </li>
      </ul>

      <div className="input">
        <input id="email" type="email" placeholder="email@company.com" />
        <label htmlFor="email">Email Address</label>
        {!isEmailValid && (
          <span className="error-message">{emailErrorMsg}</span>
        )}
        {isLoaderActive && <span className="loader"></span>}
      </div>

      <input type="submit" value="Subscribe to monthly newsletter" />
    </form>
  );
};

export default FormContent;
