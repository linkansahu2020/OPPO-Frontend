import "./Productpage.css";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [bundles, setBundles] = useState([]);
  const id = "6242d8a28edb33dcb1c9d03c";

  useEffect(() => {
    getmobile();
    getBundel();
  }, []);

  const getmobile = () => {
    axios
      .get(`https://oppo-backend.herokuapp.com/products/Smartphones/${id}`)
      .then((res) => {
        setProduct(res.data);
      });
  };

  const getBundel = () => {
    axios
      .get(`https://oppo-backend.herokuapp.com/products/Audio`)
      .then((res) => {
        setBundles(res.data);
      });
  };

  // console.log(product);
  // console.log(bundles, "bundle");
  return (
    <div id="main_page" className="main_productt_div">
      <div className="product_header_div">
        <div>
          <p
            onClick={() => {
              window.location.href = "#main_page";
            }}
          >
            Purchase
          </p>

          <p
            onClick={() => {
              window.location.href = "#come_here";
            }}
          >
            Specs
          </p>
          <p
            onClick={() => {
              window.location.href = "#prince_page";
            }}
          >
            Heighlight
          </p>
        </div>
      </div>
      <div className="main_display_div">
        <div className="mobile_disply_div">
          <div className="mobile_demo_display_div">
            <img src={product.image} alt="" />
          </div>
          {/* extra image optional */}
          <div className="extra_demo_img">
            <span>
              {" "}
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202111/10/6u0rRaBiQiNQcPI5.jpg?x-amz-process=image/resize,m_lfit,h_626,w_626"
                alt=""
                width={"20%"}
                height={"70px"}
              />{" "}
            </span>
            <span>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/11/A1I8USaPaQccncdn.jpg"
                width={"20%"}
                height={"70px"}
                alt=""
              />
            </span>
            <span>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/11/LryjHkZDaVeOzrDI.jpg"
                width={"20%"}
                height={"70px"}
                alt=""
              />
            </span>
            <span>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/11/lTNEQtfW0wFTqkMw.jpg"
                alt=""
                width={"20%"}
                height={"70px"}
              />
            </span>
            <span>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/11/jngMFXFMArOVudYs.jpg"
                width={"20%"}
                height={"70px"}
                alt=""
              />
            </span>
            <span>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/11/2qR0DoyqZel4Lghb.jpg"
                alt=""
                width={"20%"}
                height={"70px"}
              />
            </span>
          </div>
          <div className="shipping_and_other_descrip_div">
            <div className="shipping_and_other_descrip_div_first">
              <div>
                <img
                  src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8bwmCCs1eAHlP3AAALVr3kjKg646.jpg?x-amz-process=image/format,webp"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />{" "}
                <p>Free Shipping</p>
              </div>
              <div>
                <img
                  className="last_img"
                  src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/22/bRa6DB9sP9rORhgT.png"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />{" "}
                <p>Offical Warranty Varies from 6-12 months</p>
              </div>
            </div>
            <div className="shipping_and_other_descrip_div_second">
              <div>
                <img
                  src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/22/dVpcwW2hS36AszPS.png"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />{" "}
                <p>Free Shipping</p>
              </div>
              <div>
                <img
                  className="last_img"
                  src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/22/7Xk17roJoRR5mS9i.png"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />{" "}
                <p>100% Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_discrip_div">
          <div className="mobile_discrip_div_first_div">
            {/* title block */}
            <div className="mobile_name_div">
              <h1>{product.title}</h1>
            </div>
            {/* dicount block  */}
            <div className="mobile_discount_rating_div">
              <button>
                <h4> {`${product.offer}%OFF`}</h4>
              </button>
            </div>
            {/* price block */}
            <div className="mobile_price_tag_div">
              <h2>{`₹${product.price}`}</h2>
              <p>
                <s>₹25000</s>
              </p>
            </div>
            <br />
            <hr className="horizontal_line" />
            {/* special offers */}
            <div className="special_offer_block">
              <h4>Special Offers</h4>
            </div>
            {/* emi discount div */}
            <div className="emi_div_details_div">
              <div className="insta_discount_img_div">
                <img
                  src="https://opsg-img-cdn-gl.heytapimg.com/epb/202108/12/0z9sRro7DCe8biet.png"
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
              </div>
              <div className="insta_text_discount_div">
                <p>Instant Discount</p>
                <p className="second_text_p">Flat RS.1000 OFF</p>
              </div>
              <div className="further_details_div">
                <span className="ppppp">Detail</span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </div>
            {/* no cost emi  */}
            <div className="emi_div_details_div">
              <div className="insta_discount_img_div">
                <img
                  src="https://opsg-img-cdn-gl.heytapimg.com/epb/202108/12/UelsPPSnBNp8yP5Q.png"
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
              </div>
              <div className="insta_text_discount_div">
                <p>No cost EMI</p>
                <p className="second_text_p">3 Months No cost EMI</p>
              </div>
              <div className="further_details_div2">
                <span className="ppppp">Detail</span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </div>
            {/* color  section */}

            <div className="color_text_div">
              <h4>Color</h4>
            </div>
            {/* color box divs */}
            <div className="color_boxs_div">
              <div>
                <div className="first_colr"></div>
                <p>Black Carbon</p>
              </div>
              <div>
                <div>
                  <div className="second_colr"></div>
                  <p>Blue Flame</p>
                </div>
              </div>
            </div>
            {/* storage section  */}

            <div className="color_text_div">
              <h4>Storage</h4>
            </div>
            {/* color box divs */}
            <div className="color_boxs_div">
              <div>
                <p className="storage_one">6+128GB</p>
              </div>
              <div>
                <div>
                  <p className="storage_two">8+128GB</p>
                </div>
              </div>
            </div>
            {/* discount purchase section */}
            <div className="color_text_div">
              <h4>Discount with Purchase </h4>
            </div>
            <div className="extra_itemp_hadnpic">
              {bundles.map((el) => (
                <div>
                  <div className="upper_div">
                    <input type="checkbox" />
                    <img src={el.image} width={"60px"} height={"40px"} alt="" />
                    <div>
                      <span>{el.title}</span>
                    </div>
                  </div>
                  <div className="lower_div">
                    <div>{`₹${el.price}`}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* payment option sectio  */}
            <div className="paymet_opt_div">
              <h3> Payment Option</h3>
            </div>
            <div className="mobile_payment_div_sec">
              <div className="each_opt_div">
                {/* first three  */}
                <div>
                  <img
                    src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2C-rB8bwmCCrPSAEzcsAAARk2Y0oSM762.jpg"
                    width={"40px"}
                    height={"30px"}
                    alt=""
                  />
                  <p>COD</p>
                </div>
                <div>
                  <img
                    src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8bwmCCrkaAZguuAAARpIfZHIs089.jpg"
                    width={"40px"}
                    height={"30px"}
                    alt=""
                  />
                  <p>EMI</p>
                </div>
                <div>
                  <img
                    src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8LB2CCstqALZYbAAAMe9U3RFY036.jpg"
                    width={"40px"}
                    height={"30px"}
                    alt=""
                  />
                  <p>CARD</p>
                </div>
              </div>
              {/* second three  */}
              <div className="each_opt_div">
                <div>
                  <img
                    src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8bwmCCsv2AM2sJAAAQUMgKP28115.jpg"
                    width={"40px"}
                    height={"30px"}
                    alt=""
                  />
                  <p>Wallet</p>
                </div>
                <div>
                  <img
                    src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8LB2CCsxCAbdwhAAATgpJKPcA054.jpg"
                    width={"40px"}
                    height={"30px"}
                    alt=""
                  />
                  <p>NetBanking</p>
                </div>
                <div>
                  <img
                    src="https://image01.oneplus.net/shop/202104/23/1-M00-24-2D-rB8bwmCCszWAGP0hAAAUwTyhECY291.jpg"
                    width={"40px"}
                    height={"30px"}
                    alt=""
                  />
                  <p>UPI</p>
                </div>
              </div>
            </div>
            {/* shippin section  */}
            <div className="shipging_div">
              <h3>Shipping</h3>
            </div>
            <div className="shipging_div_input">
              <input
                type="text"
                placeholder="Enter PIN Code to get Delivery Date"
              />
            </div>
            <div className="shipging_div">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/20/WuCPiOgWw7UzuIH4.jpg"
                width={"40px"}
                height={"20px"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* product spec section ***************/}

      <div>
        <br />
        <div id="come_here" className="specification-table">
          <h2 id="P-specification">Product Specifications</h2>
          <table>
            <tr className="table-row">
              <td>Screen size</td>
              <td>6.43" AMOLED</td>
            </tr>
            <tr className="table-row-light">
              <td>Screen-to-body ratio</td>
              <td>90.8%</td>
            </tr>
            <tr className="table-row">
              <td>Resolution</td>
              <td>2400 x 1080</td>
            </tr>
            <tr className="table-row-light">
              <td>Battery</td>
              <td>5000mAh</td>
            </tr>
            <tr className="table-row">
              <td>Flash Charge</td>
              <td>33W</td>
            </tr>
            <tr className="table-row-light">
              <td>Length</td>
              <td>about 160.31mm</td>
            </tr>
            <tr className="table-row">
              <td>Width</td>
              <td>about 73.76mm</td>
            </tr>
            <tr className="table-row-light">
              <td>Thickness</td>
              <td>about 7.95mm</td>
            </tr>
            <tr className="table-row">
              <td>Weight</td>
              <td>about 175 g</td>
            </tr>
          </table>
          <h5 id="learn-tag">
            Learn Enough <i className="arrow up"></i>
          </h5>
          <div id="prince_page" className="All-img-spec">
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202111/22/gZNwMxKZU7geFhDl.png"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/OeIua06WbziQ04Vg.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/A7Jn2ISxMVBw3YC8.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/EP1MinBOOstzIvFm.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/hFsbLbNnFesKTql7.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/rf9PAnx4OQmPDZoj.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/rf9PAnx4OQmPDZoj.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/8tsQMkJzvOPYJfWv.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/da8WBZHlNj0uByq3.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/wMHIxwGn9vfxMv96.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/wMHIxwGn9vfxMv96.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="img-specs"
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/25/HHvvuHqFcZjX19g9.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
