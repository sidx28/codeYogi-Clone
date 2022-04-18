import React from "react";
import NavLink from "./NavLink";
import { MdOutlineQuiz } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { MdAssignment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
function NavBar() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col space-y-1 mt-5">
                <NavLink icon={<MdOutlineQuiz className="h-6 w-6 " />} to='/quiz'>Quiz</NavLink>
                <NavLink icon={<GiTeacher className="h-6 w-6" />} to="/lectures">Lectures</NavLink>
                <NavLink icon={<MdAssignment className="h-6 w-6" />} to="/assignments">Assignments</NavLink>
            </div>
            <div className="flex flex-col space-y-1">
                <NavLink icon={<CgProfile className="h-6 w-6" />} to='/profile'>Profile</NavLink>
                <NavLink icon={<BiLogOut className="h-6 w-6" />} to="/login">Logout</NavLink>
            </div>
        </div>
    );
}

export default NavBar;