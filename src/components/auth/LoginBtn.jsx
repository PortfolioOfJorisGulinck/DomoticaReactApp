import React, { useContext } from "react";
import { loginRoute } from "../../routes";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../contexts/ThemeContext";

const LoginBtn = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Link to={loginRoute}>
      <Button variant={`outline-${theme.btn}`} className="mr-3 my-2 my-sm-0">
        Inloggen
      </Button>
    </Link>
  );
};

export default LoginBtn;
