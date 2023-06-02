import { useContext } from "react";
import { emailValidationContext } from "../App";
import "./ThankYou.css";

const ThankYou = () => {
  const emailData = useContext(emailValidationContext);

  return (
    <div className="thank-you">
      <img src={require("./images/icon-success.svg").default} alt="" />
      <h2>
        Thanks for <br /> subscribing
      </h2>
      <p>
        A confirmation email has been sent to{" "}
        <span className="sub-email">{emailData.subscribeEmail}</span>. Please
        open it and click the button inside to confirm your subscription.
      </p>

      <button type="button" onClick={() => emailData.setIsEmailValid(false)}>
        Dismiss message
      </button>
    </div>
  );
};

export default ThankYou;
