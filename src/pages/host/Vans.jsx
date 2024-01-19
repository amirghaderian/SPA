import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const fetch = async () => {
    await axios
      .get("/api/host/vans")
      .then((res) => {
        setVans(res.data.vans), console.log(res.data.vans);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <p className="text-[32px] ">Your listed vans</p>
      <div className="mt-[32px]">
        {vans.map((van) => {
          return (
            <Link to={`/host/vans/${van.id}`} key={van.id} className="flex bg-white my-[15px]">
              <div>
                <img
                  src={van.imageUrl}
                  className="my-[18px] ml-[24px] rounded"
                  alt={van.name}
                  width={65}
                />
              </div>
              <div className="my-[25px] ml-[17px]">
                <p className=" text-[#161616] text-[28px] font-semibold leading-8">
                  {van.name}
                </p>
                <p className="text-[#4D4D4D] text-[16px] leading-8">
                  ${van.price}/day
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
