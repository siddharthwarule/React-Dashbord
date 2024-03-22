import React from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";

export default function Team() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidenav></Sidenav>
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Team</h1>
        </Box>
      </Box>
    </div>
  );
}
