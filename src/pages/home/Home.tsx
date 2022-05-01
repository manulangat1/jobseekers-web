import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Container sx={{ padding: "4rem", marginBottom: "10rem" }}>
        <div>
          <Typography variant="h1" gutterBottom>
            Home
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <h1> You can now track all yuor job applications here</h1>
          <Button onClick={() => navigate("/login")}>Start now</Button>
        </div>
      </Container>
    </section>
  );
};

export default Home;
