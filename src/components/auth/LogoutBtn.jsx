import React, { useContext } from "react";
import { loginRoute } from "../../routes";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

const LogoutBtn = () => {
  const { logout } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Link to={loginRoute}>
      <Button
        variant={`outline-${theme.btn}`}
        className="mr-3 my-2 my-sm-0"
        onClick={logout}
      >
        Uitloggen
      </Button>
    </Link>
  );
};

export default LogoutBtn;
