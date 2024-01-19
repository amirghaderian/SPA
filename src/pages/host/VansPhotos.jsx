import { useOutletContext } from "react-router-dom";

const VansPhotos = () => {
  const currentVan = useOutletContext().currentVan
  return (
    <div>
      <img src={currentVan.imageUrl} alt="" width={75} />{" "}
    </div>
  );
};

export default VansPhotos;
