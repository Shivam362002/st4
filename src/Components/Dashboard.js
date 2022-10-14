import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Icon from "@mui/material/Icon";

function Dashboard({ student }) {
  var newHTML = student.filter(function (el) {
    return el.course === "HTML";
  });
  var newCss = student.filter(function (el) {
    return el.course === "CSS";
  });
  var newJS = student.filter(function (el) {
    return el.course === "JavaScript";
  });

  return (
    <div className="content">
      <h1>DevilsWorld</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h5 className="m-b-20"> Devils borned  </h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <PeopleAltIcon fontSize="large" />
                  </Icon>
                  <span>{student.length}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
              <div className="card-block">
                <h5 className="m-b-20">Demons  to Devils </h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <CodeIcon fontSize="large" />
                  </Icon>
                  <span>{newHTML.length}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
              <div className="card-block">
                <h5 className="m-b-20"> Noobs to Demons</h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <CodeIcon fontSize="large" />
                  </Icon>
                  <span>{newJS.length}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h5 className="m-b-20">Master Devils</h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <CodeIcon fontSize="large" />
                  </Icon>
                  <span>{newCss.length}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
