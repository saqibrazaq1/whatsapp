import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const AddIcons = () => {
  return (
    <>
      <Box>
        <AppBar
          sx={{
            position: "static",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            backgroundColor: "#202c33",
          }}
        >
          <Toolbar sx={{ color: "white" }}>
            <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={closesidebar} />
            <Typography sx={{ marginLeft: "20px" }} variant="p">
              New chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            height: "45px",
          }}
        >
          <ChatSearch />
        </Box>
      </Box>
    </>
  );
};

export default AddIcons;
