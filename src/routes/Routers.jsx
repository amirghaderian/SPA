import { About, Dashboard, Home, Income, Reviews, Vans } from "../pages";
import { Routes, Route } from "react-router-dom";
import { HostLayout } from "../components";
import VansCardDetail from "../pages/vansCardDetail";
import Layout from "../layout";
import {
  VansInfo,
  VansList,
  VansListDetail,
  VansPhotos,
  VansPricing,
} from "../pages/host";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<VansList />} />
          <Route path="vans/:id" element={<VansListDetail />}>
            <Route index  element={<VansInfo />} />
            <Route path="pricing" element={<VansPricing />} />
            <Route path="photos" element={<VansPhotos />} />
          </Route>
        </Route>
        <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<VansCardDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routers;
