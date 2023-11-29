import { Box, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Messages = () => {
  return (
    <Box
      sx={{
        maxWidth: "500px",
        backgroundColor: "#202c33",
        display: "flex",
        alignItems: "center",
        margin: "5px 0 ",
        padding: "3px 4px",
        borderRadius: "0px 10px 10px 10px",
      }}
    >
      <Typography variant="h6" sx={{ padding: "3px 4px", width: "450px" }}>
        sdbicnu creyfer cer cerjcniercjksn jchbfdhck fhdk cdmsknd fhkv csefrdgvf
      </Typography>
      <Box>
        <ExpandMoreIcon sx={{ color: "#aebac1" }} />
        <Typography
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "end",
            alignItems: "baseline",
            padding: "3px 4px",
          }}
          variant="p"
        >
          time
        </Typography>
      </Box>
    </Box>
  );
};

export default Messages;
