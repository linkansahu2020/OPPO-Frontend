import { FaArrowLeft, FaCaretDown, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Card.css";
// import { SweetAlert } from "react-swal";
export const CardDetails = () => {
  const navigate = useNavigate();

  const saveCard = (e) => {
    e.preventDefault();
    alert("payment done");
    // SweetAlert("Payment Successfull..", " ", "sucess");
    // setTimeout(function () {
    // }, 2000);
    navigate("/");
  };
  return (
    <div>
      <div className="main_payment_container_div">
        <div className="left_payment_div">
          <div className="left_top_div">
            <button>
              <span
                onClick={() => {
                  navigate("/Paymentoption");
                }}
                className="icon_span"
              >
                <FaArrowLeft />
              </span>
              Back
            </button>
            <img
              src="data:image/jpeg;base64,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"
              width={"90px"}
              height={"60px"}
              alt=""
            />
          </div>
          <div className="left_second_div">
            <p>Enter new Card</p>
          </div>
          <div className="left_thired_div">
            <h5>
              Total Payable Amount {`₹1,111`}
              <button
                className="popup_subtotal"
                onClick={() => {
                  let x = document.getElementsByClassName("hide_div")[0];
                  if (x.style.display === "none") {
                    x.style.display = "block";
                  } else {
                    x.style.display = "none";
                  }
                }}
              >
                <FaCaretDown style={{ color: "blue" }} />
              </button>
            </h5>
          </div>
          <div className="hide_div">
            <div className="left_subtotal_div">
              <p>Subtotal</p>
              <h5>{`₹1,111`}</h5>
            </div>
          </div>
          <div className="left_fourth_div">
            <span>Transaction id : PUA2204013024024787 </span>
          </div>
        </div>
        <div className="right_payment_div">
          <div className="right_top_div">
            <p>PAYMENT OPTIONS</p>

            <select name="" id="">
              <option value="">English</option>
              <option value="">हिन्दी</option>
              <option value="">मराठी</option>
              <option value="">ಕನ್ನಡ</option>
            </select>
          </div>
          <div className="card_details">
            <form onSubmit={saveCard}>
              <div className="first_form_div">
                <p>New Card</p>
                <input required type="text" placeholder=" Enter Card Number" />
              </div>

              <div className="second_form_div">
                <div>
                  <p>Expiry</p>
                  <input required type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <p>CVV</p>
                  <input required type="text" placeholder=" Enter CVV" />
                </div>
              </div>
              <div className="first_form_div">
                <p>New of Card</p>
                <input
                  required
                  type="text"
                  placeholder=" Enter name as on card"
                />
              </div>
              <div className="check_box_div">
                <input type="checkbox" />
                <p>Save this card for secure payment</p>
              </div>
              <div className="first_form_div">
                <input
                  className="sumbit_form_btn"
                  type="submit"
                  value={"Submit"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom_img_div">
        <div className="bottom_img_div_left">
          <img
            src="https://oasis.opstatics.com/content/dam/heytap/pay/PayU.png "
            width={"50px"}
            height={"40px"}
            alt=""
          />
          <h6>Privecy Policy</h6>
        </div>
        <div className="bottom_img_div_right">
          <span>
            <img
              src="data:image/png;base64,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"
              width={"40px"}
              height={"30px"}
              alt=""
            />
          </span>
          <span>
            <img
              src="https://logodix.com/logo/428613.png"
              alt=""
              width={"40px"}
              height={"30px"}
            />
          </span>
          <span>
            <img
              src="data:image/png;base64,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"
              width={"40px"}
              height={"30px"}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};
