import React from "react";
import Structure from "@/Components/Molecules/Structure";
import MyContextProvider from "@/ContextApi/MyContextProvider";

const index = () => {
  return (
    <>
      <MyContextProvider>
        <Structure />
      </MyContextProvider>
    </>
  );
};

export default index;
