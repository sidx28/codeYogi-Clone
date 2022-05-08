import React from "react";
function H3(props) {
  return (
    <>
      <h1 className="text-lg font-medium leading-6 text-gray-900">
        {props.children}
      </h1>
    </>
  );
}
export default H3;
