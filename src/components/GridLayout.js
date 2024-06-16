import Cart from "./Cart";
import classes from "./GridLayout.module.css";
import image from '../assets/dummy_600x400_000000_d3d026.png'

export default function GridLayout() {
  return (
    <>
    <div className={classes.wrapper}>
      <div className={classes.one}>1</div>
      <div className={classes.two}>2</div>
      <div className={classes.three}>3</div>
    </div>
    <div className={classes.carts}>
        <Cart title='Prove Prove' image={image}/>
        <Cart title='Prove Prove' image={image}/>
        <Cart title='Prove Prove' image={image}/>
        <Cart title='Prove Prove' image={image}/>
        <Cart title='Prove Prove' image={image}/>
     
    </div>
    </>
  );
}
