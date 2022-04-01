import { CheckOutPage } from "./Commponents/Checkout";
import { Payment } from "./Commponents/Payment";
import { Routes, Route } from "react-router-dom";
import { PaymentOpt } from "./Commponents/Paymentoption";
import { CardDetails } from "./Commponents/Card";
import { ProductPage } from "./Commponents/Productpage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CheckOutPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Paymentoption" element={<PaymentOpt />} />
        <Route path="/carddetails" element={<CardDetails />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
