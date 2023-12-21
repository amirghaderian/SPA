import aboutHero from "../../assets/images/about-hero.png";
import { Button } from "../../components";
const About = () => {
  return (
    <div className="font-inter">
      <div className="flex justify-center ">
        <img className="w-full" src={aboutHero} alt="about hero" />
      </div>
      <div className="flex flex-col mx-[26px]">
        <div className="text-[32px] mt-[48px] font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </div>
        <div className="mt-[31px] ">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
          </p>
          <p>(Hitch costs extra 😉)</p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="my-[55px] bg-[#FFCC8D] px-[37px] py-[32px] rounded-md">
          <p className="text-[24px] font-bold">Your destination is waiting</p>
          <p className="text-[24px] font-bold leading-5">Your van is ready.</p>
          <Button className="mt-[25px] bg-[#161616] text-[#FFF] rounded-[10px] px-[22px] py-[12px]">
            Explore our vans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
