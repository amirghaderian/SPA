import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components";
const VansCardDetail = () => {
  const params = Number(useParams().id);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`/api/vans/${params}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(1);

    fetchData()
  }, []);
  return (
    <>
      {data.vans && (
        <div className="mx-6 font-inter">
          <Link to="/vans">
            <Button className="flex py-10 "> Back to all vans</Button>
          </Link>

          <div className="flex flex-col ">
            <div>
              <img src={data.vans.imageUrl} alt={data.vans.name} />
            </div>
            <Button className="flex text-[#FFEAD0] mt-[50px] mb-[20px] ">
              <p
                className=" px-[14px] py-[2px] leading-8 font-semibold rounded-md"
                style={{
                  backgroundColor: `${
                    data.vans.type === "simple"
                      ? "#E17654"
                      : data.vans.type === "rugged"
                      ? "#115E59"
                      : "#161616"
                  }`,
                }}
              >
                {data.vans.type}
              </p>
            </Button>
            <div className="flex  flex-col leading-8 fsm:w-full flex-wrap  ">
              <p className="text-[32px] font-bold">{data.vans.name}</p>
              <div className="flex text-[24px] leading-[44px]   ">
                <p className="font-bold">${data.vans.price}</p>
                <p className="font-medium">/day</p>
              </div>
            </div>
            <div className="leading-6 font-medium">{data.vans.description}</div>
            <Button className="mt-5 mb-[150px] flex justify-center rounded-[5px]  font-bold text-[18px] leading-8 text-[#ffff] bg-[#FF8C38]">
              <span className="py-[10px]">Rent this van</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default VansCardDetail;
