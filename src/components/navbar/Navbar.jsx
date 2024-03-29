import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = "text-[#161616] font-semibold left-5 pointer-events-none";
  const notActive =
    "hover:underline hover:bg-slate-100 p-2 hover:underline-offset-4 hover:rounded-md";
  return (
    <div className="flex py-9 justify-between mx-6 items-center font-inter">
      <div className="text-2xl leading-[40px] ">
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : notActive)}
          to="/"
        >
          #VANLIFE
        </NavLink>
      </div>
      <div className="flex gap-[13px] items-center">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? activeClass : notActive)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : notActive)}
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? activeClass : notActive)}
          to="/vans"
        >
          Vans
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
