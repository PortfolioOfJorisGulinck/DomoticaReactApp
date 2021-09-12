import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { homeRoute } from "../../routes";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const { saveUserName, savePassword, getJwtToken, isValidated } = useContext(AuthContext);

  const handleUserName = (e) => {
    saveUserName({ userName: e.target.value });
  };

  const handlePassword = (e) => {
    savePassword({ password: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getJwtToken();
  };

  if (isValidated) {
    return <Redirect to={homeRoute} />;
  }

  return (
    <Container>
      <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
        <Form.Group controlId="loginFormEmail">
          <Form.Label>Gebruikersnaam</Form.Label>
          <Form.Control
            onChange={handleUserName}
            name="userName"
            type="userName"
            placeholder="Gebruikersnaam"
            autoFocus
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="loginFormPassword">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control
            onChange={handlePassword}
            name="password"
            type="password"
            placeholder="Wachtwoord"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Verzend
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
