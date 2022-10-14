 import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1>Killer World</h1>
      <div className="home-content">
        <div className="home-image">
          <img src="../03.jpg" alt="admin" />
        </div>
        <div>
          <Typography variant="h3" className="lead">
            I AM DEVIL OF MY WORLD!!!
          </Typography>
          <br></br>
          <br></br>
          <Button variant="contained" className="button1" color="info" onClick={() => navigate("/dashboard")}>
            Now Die !!!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
