import { Button, Container, Typography } from "@mui/material";
import Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";

const Login = () => {
  return (
    <section style={{ padding: "3rem" }}>
      <Container>
        <Typography>Login</Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                margin: "auto",
                paddingTop: "5rem",
              }}
            >
              <Field
                style={{ marginBottom: "2rem", padding: "1rem" }}
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
              <Field
                style={{ marginBottom: "2rem", padding: "1rem" }}
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
              {/* <button variant="contained" type="submit" disabled={isSubmitting}>
                Submit
              </button> */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default Login;
