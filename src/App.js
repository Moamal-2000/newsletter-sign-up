import "./App.css";
import SignUpForm from "./Components/SignUpForm";
import ThankYou from "./Components/ThankYou";
import { useEmailContext } from "./Context/emailContext";

function App() {
  const { isEmailValid } = useEmailContext();

  return (
    <div className="App">
      {isEmailValid && <ThankYou />}
      {!isEmailValid && <SignUpForm />}
    </div>
  );
}

export default App;
