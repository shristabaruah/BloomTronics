import { Hero } from "./components/hero/hero";
import { ProductCard } from "../../components/index";
import "./home.css";
import { useFetchData } from "../../services/getdataservice";

const Home = () => {
  const products = useFetchData();

  const bestseller = products.filter((p) => p.badge === "BESTSELLER");
  const latestProducts = products.filter((p) => p.isLatest);

  return (
    <div>
      <Hero />

      <section className="product">
        <h2 className="product-category">New Arrivals</h2>
        <div className="product-card">
          {latestProducts.map((p) => {
            return (
              <ProductCard
                key={p._id}
                _id={p._id}
                imgSrc={p.imgSrc}
                alt={p.title}
                badge={p.badge}
                rating={p.rating}
                title={p.title}
                descp={p.brand}
                priceBefore={p.priceBefore}
                price={p.price}
                inStock={p.inStock}
                discount={p.discount}
              />
            );
          })}
        </div>
      </section>

      <section className="category-facilities">
        <div className="facilities">
          <div className="icon-facilities">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className="text-center">
            <h4>Free Shipping</h4>
            <p>Free shipping on all order</p>
          </div>
        </div>
        <div className="facilities">
          <div className="icon-facilities">
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div className="text-center">
            <h4>Return within 30 days</h4>
            <p>of your order</p>
          </div>
        </div>
        <div className="facilities">
          <div className="icon-facilities">
            <i className="fa-solid fa-headset"></i>
          </div>
          <div className="text-center">
            <h4>Support 24/7</h4>
            <p>Online support 24 hours a day</p>
          </div>
        </div>
      </section>

      <section className="product">
        <h2 className="product-category">Best Seller</h2>
        <div className="product-card">
          {bestseller.map((p) => (
            <ProductCard
              key={p._id}
              _id={p._id}
              imgSrc={p.imgSrc}
              alt={p.title}
              badge={p.badge}
              rating={p.rating}
              title={p.title}
              descp={p.brand}
              priceBefore={p.priceBefore}
              price={p.price}
              inStock={p.inStock}
              discount={p.discount}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export { Home };
