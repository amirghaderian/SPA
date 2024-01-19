import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeClass = "text-[#161616] font-semibold left-5 pointer-events-none";
  const notActive =
    "hover:underline hover:bg-slate-100 hover:underline-offset-4 hover:rounded-md";
  return (
    <div className="mt-[32px] mb-[45px] mx-[26px] font-inter">
      <nav className="flex gap-[29px]  text-[18px] leading-6 font-medium">
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : notActive)}
          end
          to="."
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : notActive)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : notActive)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : notActive)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
