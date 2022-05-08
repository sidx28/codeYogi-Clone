import React from "react";
function H1(props) {
  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">{props.children}</h1>
    </>
  );
}
export default H1;
