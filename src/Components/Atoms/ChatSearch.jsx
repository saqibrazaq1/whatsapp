import { Box } from "@mui/material";
import React from "react";
// import { FilterListIcon } from "@mui/icons-material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

const ChatSearch = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "5fr 0.4fr",
        alignSelf: "center",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "0.5fr 5fr ",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          placeSelf: "center",
          margin: "0 auto",
          borderRadius: "6px",
          width: "95%",
          backgroundColor: "#202c33",
        }}
      >
        <SearchIcon sx={{ color: "#aebac1", cursor: "pointer" }} />

        <Box
          sx={{
            width: "100%",
            height: "100%",
            // padding: "7px 0",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <form className="search-Input">
            <input type="text" placeholder="Search Or Start New Chat" />
          </form>
        </Box>
      </Box>

      <FilterListIcon sx={{ color: "#aebac1", cursor: "pointer" }} />
    </Box>
  );
};

export default ChatSearch;
