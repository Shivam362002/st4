import React, { useState, useEffect } from "react";
import { TextField, FormControl, Button } from "@mui/material";
//import{ Stack, InputLabel, MenuItem, Select, Box } from "@mui/material"
import { useNavigate } from "react-router-dom";
import "../Styles/addstudent.css";

function AddStudent({ student, setStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rank, setRank] = useState("");
  const [id, setId] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  return (
    <div className="content">
      <h1>Add Killers</h1>
      <div className="subject">
        <div className="form-container">
          <h3>Devils Registration Form</h3>
          <TextField
            id="standard-name"
            label="Name"
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="standard-email"
            label="Email"
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="standard-phone"
            label="Phone"
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setPhone(event.target.value)}
          />
          <TextField
            id="standard-rank"
            label="Rank"
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setRank(event.target.value)}
          />
          <TextField
            id="standard-id"
            label="ID"
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setId(event.target.value)}
          />
          <TextField
            id="standard-course"
            label="Course"
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setCourse(event.target.value)}
          />
          {/* <InputLabel id="demo-simple-select-label" sx={{ minWidth: 120 }}>
          {" "}
        </InputLabel>
        Course
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Course"
          onChange={(event) => setCourse(event.target.value)}>
          <MenuItem value={"HTML"}>HTML</MenuItem>
          <MenuItem value={"CSS"}>CSS</MenuItem>
          <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
        </Select> */}
          <Button
            variant="outlined"
            onClick={() => {
              const newStudent = {
                name: name,
                email: email,
                phone: phone,
                rank: rank,
                id: id,
                course: course,
              };
              setStudent([...student, newStudent]);
              navigate("/allStudent");
            }}>
            Go Kill !!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
