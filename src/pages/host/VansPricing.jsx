import { useOutletContext } from "react-router-dom";

const VansPricing = () => {
  const currentVan = useOutletContext().currentVan;
  return (
    <div className="mt-[45px]">
      <span className="text-[#161616] text-[24px] font-medium leading-5">
        ${parseFloat(currentVan.price).toFixed(2)}
      </span>
      <span className="text-[#4D4D4D] font-medium leading-5">/day</span>
    </div>
  );
};

export default VansPricing;
