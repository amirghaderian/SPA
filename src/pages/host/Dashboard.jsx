import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <p className="text-[32px]">Dashboard</p>
      <Outlet />
    </>
  );
};

export default Dashboard;
