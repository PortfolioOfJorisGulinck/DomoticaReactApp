import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { homeRoute } from "../../routes";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const { account, isValidated, saveAccount } = useContext(AuthContext);

  const handleChange = (e) => {
    const name = ([e.currentTarget.username] = e.currentTarget.value);
    const password = ([e.currentTarget.password] = e.currentTarget.value);
    console.log(name);
    console.log(password);
    saveAccount(name, password);
    return <Redirect to={homeRoute} />;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    handleChange(event);
  };

  return (
    <Container>
      <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
        <Form.Group controlId="loginFormEmail">
          <Form.Label>Gebruikersnaam</Form.Label>
          <Form.Control
            value={account.email}
            onChange={handleChange}
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
            value={account.password}
            onChange={handleChange}
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
