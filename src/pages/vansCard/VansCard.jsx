import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../../components";
const VansCard = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get("/api/vans")
      .then(({ data }) => {
        setData(data.vans);
        console.log(data.vans);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-between  gap-[16px] font-interjustify-center   ">
      {data.map((item) => (
        <div
          className="  text-[#161616] flex flex-wrap fsm:w-full  vvs:w-[calc(50%-8px)] lg:w-[calc(33%-8px)]"
          key={item.id}
        >
          <div className="  mx-auto  flex flex-wrap flex-col  ">
            <div className=" ">
              <img src={item.imageUrl} alt={item.name} />
            </div>

            <div className="flex justify-between text-[28px]  font-semibold leading-8 fsm:w-full flex-wrap  ">
              <p>{item.name}</p>
              <div className="flex flex-col ">
                <p>${item.price}</p>
                <p>/day</p>
              </div>
            </div>
            <Button className="flex text-[#FFEAD0] ">
              <p className=" px-[14px] py-[2px] leading-8 font-semibold rounded-md"
                style={{
                  backgroundColor: `${
                    item.type === "simple"
                      ? "#E17654"
                      : item.type === "rugged"
                      ? "#115E59"
                      : "#161616"
                  }`,
                }}
              >
                {item.type}
              </p>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VansCard;
