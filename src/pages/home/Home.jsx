import { Button } from "../../components";
const Home = () => {
  return (
    <div className="">
      <div className="bg-hero-pattern  h-[387px] bg-no-repeat relative flex justify-center font-inter bg-cover">
        <div className="top-[65px] absolute text-[36px] font-extrabold text-[#FFF] mx-[27px] px-0 leading-[42px]">
          <p>You got the travel plans, we got the travel vans.</p>
        </div>
        <div className="top-[172px]  absolute  font-medium text-[#FFF] mx-[27px]">
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
        </div>
        <div className="bottom-[76px] absolute  w-full px-[27px]">
          <Button className="bg-[#FF8C38] text-[#FFF] font-bold w-full rounded-md ">
            <p className="leading-8 py-[9px]">Find your van</p>
          </Button>
        </div>
      </div>  
          
    </div>
  );
};

export default Home;
