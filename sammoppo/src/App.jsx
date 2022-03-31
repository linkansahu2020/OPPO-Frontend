import { CheckOutPage } from "./Commponents/Checkout";
import { Payment } from "./Commponents/Payment";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CheckOutPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
