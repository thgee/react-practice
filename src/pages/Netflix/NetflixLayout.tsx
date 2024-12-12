import { Outlet } from "react-router-dom";
import { Gnb } from "../../components/Netflix/Gnb/Gnb";

export const NetflixLayout = () => {
  return (
    <>
      <Gnb />
      <Outlet />
    </>
  );
};
