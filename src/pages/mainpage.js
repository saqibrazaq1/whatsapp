import React from "react";
// import SignIn from "@/Components/Molecules/SignIn";
import Structure from "@/Components/Molecules/Structure";
import MyContextProvider from "@/ContextApi/MyContextProvider";
const mainpage = () => {
  return (
    <>
      <MyContextProvider>
        <Structure />
      </MyContextProvider>
    </>
  );
};

export default mainpage;
