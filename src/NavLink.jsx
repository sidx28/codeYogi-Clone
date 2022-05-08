import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link
      to={props.to}
      className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 text-sm font-medium rounded-md"
    >
      <div className="flex flex-row items-center justify-center">
        {props.icon}
        <span className="ml-3">{props.children}</span>
      </div>
    </Link>
  );
}

export default NavLink;
