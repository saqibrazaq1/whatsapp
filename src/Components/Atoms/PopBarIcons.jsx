/** @format */

import { PersonAdd } from "@mui/icons-material";
import { Box, ListItemIcon, MenuItem, Typography } from "@mui/material";
import React from "react";

const PopBarIcons = ({ icon, text }) => {
  return (
    <Box
      sx={{
        height: "63px",
        color: "white",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.10)",
        },
      }}
    >
      <MenuItem
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   bgcolor: "green",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "10%",
            color: "white",
            backgroundColor: "red",
          }}
        >
          {icon}
        </Box>
        <Box
          sx={{
            padding: "18px 0px",
            borderBottom: "1px solid  rgba(255, 255, 255, 0.11)",
            // bgcolor: "yellow",
            width: "100%",
            flexGrow: "1",
            marginLeft: "15px",
            "&:hover": {
              border: "none",
            },
          }}
        >
          {text}
        </Box>
      </MenuItem>
    </Box>
  );
};

export default PopBarIcons;
