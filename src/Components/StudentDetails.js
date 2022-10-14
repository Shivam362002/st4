import React from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Stack } from "@mui/material";
import "../Styles/studentdetails.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
function StudentDetails({ student }) {
  const { index } = useParams();
  const selectedStudent = student[index];
  console.log(index);
  return (
    <Card className=" details-container">
      {" "}
      <Box>
        <div className="image">
          <img src={selectedStudent.avatar} alt={selectedStudent.name} className="profile" />
        </div>
        <h2> {selectedStudent.name}</h2>
        <h5>Devils ID: {selectedStudent.id}</h5>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-evenly"
          className="info">
          <h6 className="head">
            Course: <br></br>{" "}
            <span>
              <AutoStoriesIcon color="warning" /> &nbsp;{selectedStudent.course}{" "}
            </span>
          </h6>{" "}
          <h6 className="head">
            Rank: <br></br>{" "}
            <span>
              {" "}
              <WorkspacePremiumIcon color="warning" size="large" /> &nbsp;{selectedStudent.rank}{" "}
            </span>
          </h6>{" "}
          <h6>
            ToDo: <br></br>
            <span>
              <EmailIcon color="warning" /> &nbsp;
              {selectedStudent.email}{" "}
            </span>
          </h6>{" "}
          <h6>
            Casting:
            <br></br>{" "}
            <span>
              <CallIcon color="warning" /> &nbsp; {selectedStudent.phone}
            </span>
          </h6>
        </Stack>
      </Box>
    </Card>
  );
}

export default StudentDetails;
