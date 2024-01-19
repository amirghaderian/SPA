import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import Button from "../../components/button";

const VansDetail = () => {
  const [currentVan, setCurrentVan] = useState({});
  const { id } = useParams();
  const activeClass = "text-[#161616] font-bold left-5 pointer-events-none leading-5 ";
  const notActive =
    "hover:underline hover:bg-slate-100 hover:underline-offset-4 hover:rounded-md  text-[#4D4D4D] font-medium leading-5";
  const fetch = async () => {
    await axios
      .get(`/api/host/vans/${id}`)
      .then((res) => {
        setCurrentVan(res.data.vans[0]), console.log(res.data.vans[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch();
  }, []);
  const loading = "{}" === JSON.stringify(currentVan);

  return (
    <>
      <div className=" mt-[26px]">
        ⬅
        <Link
          to={".."}
          relative="path"
          className="text-[16px] text-[#201F1D] leading-5 underline underline-offset-2"
        >
          Back to all vans
        </Link>
      </div>
      {loading ? (
        <p>"loading!!"</p>
      ) : (
        <>
          <div className="mt-[37px] bg-white flex pt-[23px] items-center pb-[26px] ">
            <div className="">
              <img
                className="ml-[25px]"
                src={currentVan.imageUrl}
                alt=""
                width={160}
              />
            </div>
            <div className="ml-[20px]">
              <Button className="p-[11px] bg-[#E17654] rounded text-[#FFEAD0] font-semibold leading-6 mb-[18px] capitalize">
                {currentVan.type}
              </Button>
              <p className="text-[#161616] text-[26px] font-bold left-7">
                {currentVan.name}
              </p>
              <p className="text-[#161616] text-[20px] font-bold leading-9 ">
                {"$" + currentVan.price}
                <span className="text-[16px] font-medium">/day</span>
              </p>
            </div>
          </div>
          <div className="pl-[25px] bg-white gap-6 ">
            <div className="flex gap-[22px] mb-[27px] ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : notActive
                }
                to="."
                end
              >
                Details
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : notActive
                }
                to="pricing"
              >
                Pricing
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : notActive
                }
                to="photos"
              >
                Photos
              </NavLink>
            </div>
            <Outlet context={{currentVan}} />
          </div>
        </>
      )}
    </>
  );
};

export default VansDetail;
