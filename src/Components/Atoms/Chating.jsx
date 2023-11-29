import React, { useContext } from "react";
import { Box, CssBaseline } from "@mui/material";
import WebChats from "./WebChats";
import WhatsaPic from "./WhatsaPic";
import { MyContext } from "@/ContextApi/MyContextProvider";

const Chating = () => {
  const { data } = useContext(MyContext);

  return (
    <>
      <CssBaseline />
      <Box sx={{ background: "#222e35", color: "white" }}>
        {data ? <WebChats /> : <WhatsaPic />}
      </Box>
    </>
  );
};

export default Chating;
