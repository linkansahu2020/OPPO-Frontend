import { Routes, Route } from "react-router-dom";
import { CheckOutPage } from "../Commponents/Checkout";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CheckOutPage />} />
      </Routes>
    </>
  );
};
