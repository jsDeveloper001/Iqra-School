import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex gap-3">
            <div className="p-3 bg-red-500 rounded-bl-3xl rounded-br-3xl flex flex-col justify-center items-center shadow-2xl">
                <h2 className="text-blue-900 font-bold text-lg md:text-2xl lg:text-3xl">বর্ণমালা বিদ্যাপীঠ</h2>
                <p className="font-semibold text-xs md:text-base lg:text-lg text-blue-900">জ্ঞান অর্জন, সু-শিক্ষা গ্রহণ</p>
            </div>
            <ul className="hidden lg:flex items-center lg:text-xs xl:text-sm">
                <NavLink to={'/'} className={({ isActive }) => isActive && "bg-red-500"}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive && "bg-red-500"}>About</NavLink>
                <NavLink to={'/administration'} className={({ isActive }) => isActive && "bg-red-500"}>Administration</NavLink>
                <NavLink to={'/academic'} className={({ isActive }) => isActive && "bg-red-500"}>Academic</NavLink>
                <NavLink to={'/admission'} className={({ isActive }) => isActive && "bg-red-500"}>Admission</NavLink>
                <NavLink to={'/co-curriculum'} className={({ isActive }) => isActive && "bg-red-500"}>Co-Curriculum</NavLink>
                <NavLink to={'/facilities'} className={({ isActive }) => isActive && "bg-red-500"}>Facilities</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive && "bg-red-500"}>Contact Us</NavLink>
                <FaSearch className="ml-4 hover:cursor-pointer text-xl"/>
            </ul>
            
        </nav>
    );
};

export default Navbar;