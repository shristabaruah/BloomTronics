import "./coupon.css";
import { toast } from "react-toastify";

const Coupon = ({
  setCouponModalOpen,
  totalPrice,
  couponType,
  setCouponType,
  couponDiscount,
}) => {
  const modalOpen = (e) => {
    e.stopPropagation();
    setCouponModalOpen((prev) => !prev);
    if (couponType !== "") {
      toast.success(`Yay you saved Rs ${couponDiscount} with one coupon`);
    }
  };

  const applyCoupon = (e) => {
    e.target.checked ? setCouponType(e.target.value) : setCouponType("");
  };
  return (
    <>
      <div className="modal-container" onClick={modalOpen}></div>
      <div className="coupon-modal" onClick={(e) => e.stopPropagation()}>
        <section className="coupon-heading">
          <h4>APPLY COUPON</h4>
        </section>
        <section className="coupon-option">
          <div className="coupon-container">
            <input
              type="checkbox"
              className="coupon-radio"
              disabled={totalPrice <= 5000}
              checked={couponType === "10"}
              value="10"
              onChange={applyCoupon}
            />
            <label className={totalPrice <= 5000 ? "coupon-label" : "active"}>
              GET10
            </label>
            <p className="coupon-description">
              10% Off on minimum purchase of Rs 5000{" "}
            </p>
          </div>
          <div className="coupon-container">
            <input
              type="checkbox"
              className="coupon-radio"
              disabled={totalPrice <= 20000}
              checked={couponType === "25"}
              onChange={applyCoupon}
              value="25"
            />
            <label className={totalPrice <= 20000 ? "coupon-label" : "active"}>
              OFFER25%
            </label>
            <p className="coupon-description">
              25% Off on minimum purchase of Rs 20,000
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export { Coupon };
