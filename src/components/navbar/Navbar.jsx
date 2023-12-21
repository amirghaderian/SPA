import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-9 justify-between mx-6 items-center">
      <div className="font-inter font-black text-2xl leading-[40px] ">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="flex gap-[13px] items-center">
        <Link
          to="/about"
          className="text-[#161616] font-inter font-semibold leading-5 "
        >
          About
        </Link>
        <Link to="/">Vans</Link>
      </div>
    </div>
  );
};

export default Navbar;
