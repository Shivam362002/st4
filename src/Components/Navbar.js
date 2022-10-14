import { AppBar, Toolbar, TextField } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <TextField className="main"></TextField>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
