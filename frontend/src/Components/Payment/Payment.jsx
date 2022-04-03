import "./Payment.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export const Payment = () => {
  const navigate = useNavigate();
  const {item_id,address_id} = useParams()
  const [item,setItem] = useState({})
  const [address,setAddress] = useState({})
  const getData = ()=>{
    axios.get(`https://oppo-backend.herokuapp.com/products/Audio/${item_id}`).then(({data})=>{
        setItem(data)
    })
    axios.get(`https://oppo-backend.herokuapp.com/address/one/${address_id}`).then(({data})=>{
        setAddress(data)
    })
  }
  useEffect(()=>{
      getData()
  },[])
  return (
      <>
      <Navbar/>
    <div className="Main_outer_div">
      <div className="header_div">
        <h2>Payment</h2>
      </div>
      <div className="main_content_div">
        <div className="order_sumbit_mark_div">Order Submitted</div>
        <div className="Timeslpa_div">
          Please complete your payment before 01:06:54
        </div>
        <div className="order_details_div">
          <div className="order_details_div_first_div">
            <p style={{fontWeight: 'bold'}}>Order total</p>
            <h3>₹{Math.floor(item.price-(item.price*(item.offer/100)))}</h3>
          </div>
          <br />
          <div className="addres_details_shipping_div">
            <p style={{fontWeight:'bold',}}>Order information</p>
            <div>
              <div>
                <p>Order Number:</p>
                <p>Shipping Address:</p>
                <p>Product Details:</p>
                <p>Phone Number:</p>
                <p>Name:</p>
              </div>
              <div>
                <p>#{Math.random()}</p>
                <p>{address.HouseNumber}</p>
                <p>864565655</p>
                <p>{address.Phonenumber}</p>
                <p>{address.Name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* payment div */}
        <div className="payment_div_section">
          <div style={{textAlign:'left',fontWeight: 'bold'}}>
            <p>Select Pay Method</p>
          </div>
          {/* cod option div */}

          <div id="myModal" class="cod_popus">
            <div class="cod_popup_content">
              <div
                className="close_mark"
                onClick={() => {
                  document.getElementsByClassName(
                    "cod_popus"
                  )[0].style.display = "none";
                }}
              >
                X
              </div>
              <div className="first_cod_popup_div">
                <h2>Cash on Delivery</h2>
              </div>
              <div className="second_cod_popup_div">
                <div className="guidline_div">
                  <span>
                    By selecting this payment,you will pay for you order when it
                    is delivered to your address.
                  </span>
                  <br />
                  <span>
                    Please enter the verification code that was sent to your
                    number below to ensure proper delivery
                  </span>
                </div>
                <div className="number_div">
                  <h4>+91 8197717473</h4>
                </div>
                <div className="get_code_div">
                  <input type="text" />
                  <button>GEt code</button>
                </div>
                <div className="pay_num_cod_button">
                  <button
                    onClick={() => {
                      document.getElementsByClassName(
                        "cod_popus"
                      )[0].style.display = "none";
                    }}
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* cod popups */}

          <div
            className="cash_on_deliv_div"
            onClick={() => {
              document.getElementsByClassName("cod_popus")[0].style.display =
                "block";
            }}
          >
            <div>
              <img
                src="https://oasis.opstatics.com/content/dam/heytap/pay/Delivery%20Shipping-green.png"
                width={"50px"}
                height={"50px"}
                alt=""
              />
              <span className="span_text">Cash On Delivery</span>
            </div>
            <div>
              <span className="span_text"> {`>`} </span>
            </div>
          </div>
          {/* online payment div */}
          <div className="online_payment_div">
            <div className="payment_div_one">
              <img
                src="https://oasis.opstatics.com/content/dam/heytap/pay/PayU.png"
                width={"50px"}
                height={"25px"}
                alt=""
              />
              <span className="payU_green">PayU</span>
            </div>
            <div className="payment_div_two">
              <span>
                The offers are available on selective products.Values are
                subject to find display at the checkout page
                <a href="#">Learn more!</a>
              </span>{" "}
              <br />
              <span>Including payment option PayU:</span>
            </div>
            <div className="payment_div_three">
              <div>
                <img
                  src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8bwmCCrkaAZguuAAARpIfZHIs089.jpg "
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
                <p className="span_text2"> EMI</p>
              </div>
              <div>
                <img
                  src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8LB2CCstqALZYbAAAMe9U3RFY036.jpg"
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
                <p className="span_text2"> Card</p>
              </div>
              <div>
                <img
                  src=" https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8bwmCCsv2AM2sJAAAQUMgKP28115.jpg"
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
                <p className="span_text2">Wallet</p>
              </div>
              <div>
                <img
                  src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8LB2CCsxCAbdwhAAATgpJKPcA054.jpg"
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
                <p className="span_text2">NetBanking</p>
              </div>
              <div>
                <img
                  src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8bwmCCszWAGP0hAAAUwTyhECY291.jpg"
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
                <p className="span_text2">UPI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom dummy div */}
      <div className="bottom_dumy_div"></div>
      {/* pay now div */}
      <div className="pay_now_div">
        <div className="first_div_fo_pay_now_div">
          <img
            src="https://thumbs.dreamstime.com/b/green-shield-security-tick-icon-simple-vector-filled-flat-green-shield-security-tick-icon-solid-pictogram-isolated-white-133480059.jpg"
            width={"30px"}
            height={"30px"}
            alt=""
          />
          <span>Your payment is proctected</span>
        </div>
        <div className="second_div_fo_pay_now_div">
          <div>
            <h2>Order Total:₹{Math.floor(item.price-(item.price*(item.offer/100)))}</h2>
          </div>
          <div>
            <button
              onClick={() => {
                navigate(`/paymentoption/${item._id}`);
              }}
              className="Paynow_button"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      </>
  );
};