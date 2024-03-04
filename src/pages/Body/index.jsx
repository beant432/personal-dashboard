import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./index.scss";

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="body_wrapper">
        <Outlet />
      </div>
    </>
  );
};
export default Body;
