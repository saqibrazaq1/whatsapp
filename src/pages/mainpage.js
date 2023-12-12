/** @format */

import React from "react";
// import SignIn from "@/Components/Molecules/SignIn";
import Structure from "@/Components/Molecules/Structure";
import MyContextProvider from "@/ContextApi/MyContextProvider";
import LoggedUserProvider from "@/ContextApi/GetLoggedUser";

const mainpage = () => {
  return (
    <>
      <MyContextProvider>
        <LoggedUserProvider>
          <Structure />
        </LoggedUserProvider>
      </MyContextProvider>
    </>
  );
};

export default mainpage;
