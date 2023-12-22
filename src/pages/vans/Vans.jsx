import { Button } from "../../components";
import VansCard from "../vansCard";
import "../../services/server";
const Vans = () => {
  return (
    <div>
      <div className=" mt-[54px] font-inter mx-[26px]">
        <div className="text-[32px]  font-bold leading-8">
          Explore our van options 🚙
        </div>
        <div className="flex flex-col justify-center mt-[23px]  vsm:flex-row">
          <div className="flex flex-col gap-5  vsm:flex-row">
            <Button className="py-2 px-6 bg-[#FFEAD0] text-[#4D4D4D]">
              <p>Simple</p>
            </Button>
            <Button className="py-2 px-6 bg-[#FFEAD0] text-[#4D4D4D]">
              <p>Luxury</p>
            </Button>
            <Button className="py-2 px-6 bg-[#FFEAD0] text-[#4D4D4D]">
              <p>Rugged</p>
            </Button>
          </div>
          <Button className="underline  underline-offset-[2px] text-[#4D4D4D] ml-0  vsm:ml-[40px]">
            <p>Clear filters</p>
          </Button>
        </div>
        <div className="mt-[56px]">
          <VansCard />
        </div>
      </div>
    </div>
  );
};

export default Vans;
