import { NavLink } from "react-router-dom";
import Logo from "./logo";
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="flex justify-between items-center mt-4 py-4 pl-16 pr-16">
                <Logo ></Logo>
                <ul className=" flex gap-7 ">
                    <li>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? " text-red-500 underline" : ""
                    }>
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                    }>
                    Donation
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                    }>
                    Statistics
                    </NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;