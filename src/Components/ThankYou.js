import { useEmailContext } from "../Context/emailContext";
import "./ThankYou.css";

const ThankYou = () => {
  const { subscribeEmail, setIsEmailValid } = useEmailContext();

  return (
    <div className="thank-you">
      <img
        src={require("../images/icon-success.svg").default}
        alt="success icon"
      />
      <h2>
        Thanks for <br /> subscribing
      </h2>
      <p>
        A confirmation email has been sent to{" "}
        <span className="sub-email">{subscribeEmail}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>

      <button type="button" onClick={() => setIsEmailValid(false)}>
        Dismiss message
      </button>
    </div>
  );
};

export default ThankYou;
