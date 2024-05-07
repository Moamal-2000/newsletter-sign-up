import { createContext, useContext, useState } from "react";

export const emailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const data = {
    isEmailValid,
    setIsEmailValid,
    subscribeEmail,
    setSubscribeEmail,
  };

  return <emailContext.Provider value={data}>{children}</emailContext.Provider>;
};
export default EmailContextProvider;

export const useEmailContext = () => useContext(emailContext);
