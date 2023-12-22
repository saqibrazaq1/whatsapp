/** @format */

import React from "react";
// import SignIn from "@/Components/Molecules/SignIn";
import Structure from "@/Components/Molecules/Structure";
import MyContextProvider from "@/ContextApi/MyContextProvider";
import LoggedUserProvider from "@/ContextApi/GetLoggedUser";
import AddedUsers from "@/ContextApi/AddedUsers";
import GetRegUsersProvider from "@/ContextApi/GetRegUsers";

const mainpage = () => {
  return (
    <>
      <GetRegUsersProvider>
        <MyContextProvider>
          <AddedUsers>
            <LoggedUserProvider>
              <Structure />
            </LoggedUserProvider>
          </AddedUsers>
        </MyContextProvider>
      </GetRegUsersProvider>
    </>
  );
};

export default mainpage;
