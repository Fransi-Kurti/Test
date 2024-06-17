import Cart from "./Cart";
import classes from "./GridLayout.module.css";
import Button from "./Button";
import { DUMMY_CART_DATA } from "../data/cartData";

export default function GridLayout() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.one}>
          <div className={classes.boxOneContent}>
            <h3>
              4TH OF JULY <br />
              SAVINGS ARE HERE
            </h3>
            <h1> save 15% sitewide</h1>

            <p>FOR ORDERS OVER $200</p>
            <h1>CODE: JULY4</h1>
            <Button label="Shop now" />
          </div>
        </div>
        <div className={classes.two}>
          <button className={classes.boxTwoButton}>Shop Now</button>
        </div>
        <div className={classes.three}>
        <button className={classes.boxThreeButton}>Shop Now</button>
        </div>
      </div>
      <div className={classes.carts}>
        {DUMMY_CART_DATA.map((item) => (
          <Cart key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </>
  );
}
