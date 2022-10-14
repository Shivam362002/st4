import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "../Styles/allstudents.css";
import { useNavigate } from "react-router-dom";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Avatar, Button, Paper } from "@mui/material";

const AllStudents = ({ student, setStudent }) => {
  const navigate = useNavigate();
  let handleRemove = (index) => {
    let newList = [...student];
    newList.splice(index, 1);
    console.log(newList, index);
    setStudent(newList);
  };

  return (
    <div className="content">
      <h1>All Devil Borned </h1>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="header">
              <TableRow>
                <TableCell>Profile</TableCell>
                <TableCell>LuckNames</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Rank</TableCell>
                <TableCell>Kill Numbers</TableCell>
                <TableCell>Jutsu</TableCell>
                <TableCell align="center">Action</TableCell>
                <TableCell align="center">DestroyHim</TableCell>
                <TableCell align="center">ViewDevils</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {student.map((student, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className="data">
                  <TableCell>
                    <Avatar alt={student.name} src={student.avatar} align="center" />
                  </TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.rank}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      color="warning"
                      startIcon={<EditIcon key={index} />}
                      onClick={() => navigate(`/edit/${index}`)}>
                      MakeKiller
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => handleRemove(index)}
                      size="small"
                      color="error"
                      startIcon={<DeleteIcon key={index} />}>
                      DeleteKiller
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/allstudent/${index}`)}
                      size="small"
                      color="info"
                      startIcon={<RemoveRedEyeIcon key={index} />}>
                      SelectKillers
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AllStudents;
