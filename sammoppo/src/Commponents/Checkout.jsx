import "../checkout.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// console.log(num);
export const CheckOutPage = () => {
  // const [num, setNum] = useState(0);
  const { id } = useParams();
  console.log(id, "id from pre page");
  const [info, setInfo] = useState({
    Name: "",
    Phonenumber: "",
    HouseNumber: "",
    AreaNo: "",
    Pin: "",
    City: "",
    State: "",
  });
  const [cart_item, setCart_item] = useState([]);
  const [useraddress, setUseraddress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCartdata();
    getUserdata();
  }, []);

  const getCartdata = () => {
    axios.get("http://localhost:3009/Cart").then(({ data }) => {
      setCart_item(data);
    });
  };

  const getUserdata = () => {
    axios.get("http://localhost:3009/UserInfo").then(({ data }) => {
      setUseraddress(data);
      console.log(data);
    });
  };

  let sum = 0;
  for (let i = 0; i < cart_item.length; i++) {
    sum += cart_item[i].price;
  }

  const evnthandler = (e) => {
    let { id, value } = e.target;
    setInfo((pre) => ({ ...pre, [id]: value }));
  };

  const handlechnager = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3009/UserInfo", info).then((res) => {
      getUserdata();
    });
    document.getElementsByClassName("popups")[0].style.display = "none";
  };

  // const { Name, Phonenumber, HouseNumber, AreaNo, Pin, City, State } = info;
  return (
    <div className="first_div">
      <div className="main_continer_div">
        {/* /*****************************************/}

        <div className="popups">
          <div className="innerpopup">
            <button
              onClick={() => {
                document.getElementsByClassName("popups")[0].style.display =
                  "none";
              }}
              className="close_button"
            >
              X
            </button>
            <h2>Add Shipping Address</h2>
            <form onSubmit={handlechnager} className="form_input">
              <div className="form_div">
                <input
                  id="Name"
                  onChange={evnthandler}
                  required
                  type="text"
                  placeholder="Name"
                />
                <input
                  id="Phonenumber"
                  onChange={evnthandler}
                  required
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <input
                id="HouseNumber"
                onChange={evnthandler}
                required
                type="text"
                placeholder="House Address"
              />
              <input
                id="AreaNo"
                onChange={evnthandler}
                required
                type="text"
                placeholder="Area street no"
              />
              <input
                id="Pin"
                onChange={evnthandler}
                required
                type="text"
                placeholder="Pin"
              />
              <input
                id="City"
                onChange={evnthandler}
                required
                type="text"
                placeholder="City"
              />
              <input
                id="State"
                onChange={evnthandler}
                required
                type="text"
                placeholder="State"
              />
              <h6>
                <input type="checkbox" /> use as default address
              </h6>
              <input
                required
                className="save_button"
                type="submit"
                value="Save"
              />
            </form>
          </div>
        </div>

        {/* /*********************************************/}
        <div className="check_out_text_div">
          <h1>Checkout</h1>
        </div>
        <div className="shipping_add_div">
          <div className="inside_shipping_add_div">
            <h3 className="first_h3">Shipping Address</h3>
            <button
              onClick={() => {
                document.getElementsByClassName("popups")[0].style.display =
                  "block";
              }}
              className="second_button"
            >
              {" "}
              + Add New Address
            </button>
          </div>
          {useraddress.map((el) => (
            <div className="address_box_div">
              <span>{`${el.Name},`}</span> <span>{`${el.City},`}</span>
              <br />
              <span>{`Tel:+91 ${el.Phonenumber}`}</span>
            </div>
          ))}
        </div>

        {/* billing address checkbox section */}
        <div className="Billing_address">
          <h3>
            <label className="billings_tags">
              Billing address same as shipping address
            </label>
            <input className="billings_tags" type="checkbox" />
          </h3>
        </div>
        {/* shipping charge dive */}
        <div className="shipping_charg_div">
          <h3>Shipping Method</h3>
          <div className="priority_div">
            <div className="inside_priority_div_one">
              <h3>Priority</h3>
              <h3>Free</h3>
            </div>
            <div className="inside_priority_div_two">
              <span>Estimated devlivery by 4th Apr 2022 </span>
              <span> ₹49</span>
            </div>
          </div>
        </div>

        {/* order summary here */}
        <div className="Main_order_div">
          <div className="Order_summary_text">
            <h3>Order Summary</h3>
          </div>
          {cart_item.map((el) => (
            <div className="each_order_item_div">
              {/* 1st inner div */}
              <div className="img_and_title_div">
                <img src={el.imgurl} alt="" width={"120px"} height={"120px"} />
                <div>
                  <h4>{el.title}</h4>
                  <br />
                  <p>Saved:₹0</p>
                </div>
              </div>
              {/* 2nd inner div */}
              <div className="price_totlength_div">
                <div>
                  <h1 className="price_color">{`₹${el.price}`}</h1>
                </div>
                <div>
                  <p>{`x${el.len}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* coupon card section */}
        <div className="coupon_card_div">
          <div>
            <h3>Coupon</h3>
            <button className="butt">
              <h4> No coupon is available</h4>
            </button>
          </div>
        </div>
        {/* Total sum div */}
        <div className="Total_item_div">
          <div>
            <h3>Item Subtotal </h3>
            <h4>{`₹${sum}`} </h4>
          </div>

          <div>
            <h3>Item Discount </h3>
            <h4>{`₹${0}`} </h4>
          </div>
          <div>
            <h3>Shipping fee </h3>
            <h4>{`₹${0}`} </h4>
          </div>
          <div>
            <h3>Total </h3>
            <h2>{`₹${sum}`} </h2>
          </div>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in
          blanditiis minus facere ea, architecto veniam. Eos temporibus neque,
          amet, dicta, autem numquam facere ullam ea delectus et dignissimos
          iure? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente ea autem accusantium itaque velit! Sapiente repellendus est
          exercitationem suscipit provident nihil, harum veniam, porro ex
          laboriosam blanditiis omnis quaerat quibusdam?
        </div>
      </div>

      {/* this is dum div on top of the div line 125 */}
      <div className="footer_total_div_one"></div>
      {/* do not touch abour div */}
      <div className="footer_total_div">
        <div className="term_and_police">
          <input type="checkbox" />
          <h6>
            i have read and agreed to the{" "}
            <a href="#"> Privacy Policy,Term of Sale</a>,and{" "}
            <a href="#">Term&Conditions of OPPO Proctection Plan</a>
          </h6>
        </div>
        <div className="bottom_total_button_div">
          <div>
            <h2> {`Total ₹${sum}`}</h2>
            <h4>Save 0</h4>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/payment");
              }}
              className="order_butt"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
