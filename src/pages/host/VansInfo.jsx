import { useOutletContext } from "react-router-dom";

const VansInfo = () => {
  const currentVan = useOutletContext().currentVan;
  const paragraph =
    "capitalize text-[#161616] text-[14px] font-bold leading-5 mb-[15px]";
  return (
    <div>
      <p className={paragraph}>
        name: <span className="pr-[3px] font-medium"> {currentVan.name}</span>
      </p>
      <p className={paragraph}>
        category:
        <span className="pr-[3px] font-medium"> {currentVan.type}</span>
      </p>
      <p className={paragraph}>
        description:
        <span className="pr-[3px] font-medium 	normal-case	 "> {currentVan.description}</span>
      </p>
      <p className={paragraph}> visibility: {""}public</p>
    </div>
  );
};

export default VansInfo;
