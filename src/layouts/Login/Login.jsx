import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../../api/authenticationApi";
import { InputPassword, InputText } from "../../components/Inputs";
import PrimaryButton from "../../components/PrimaryButton";
import { useIsLoggedIn } from "../../context/isLoggedInContext";

export default function Login() {
  const [login, setLogin] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  var formSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let loginRes = await Authentication.login(login, passowrd);
    if (loginRes.ok) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setIsLoading(false);
      setErrorMessage(loginRes.message);
    }
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="flex flex-col gap-3 w-1/4" onSubmit={formSubmit}>
        <InputText
          placeholder={"Login"}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <InputPassword
          placeholder={"Password"}
          value={passowrd}
          onChange={(e) => setPassowrd(e.target.value)}
        />
        {errorMessage !== "" && (
          <div className="text-center text-red">{errorMessage}</div>
        )}
        <PrimaryButton isLoading={isLoading}>Login</PrimaryButton>
      </form>
    </div>
  );
}
