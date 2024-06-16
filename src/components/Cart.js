import Button from './Button'
import classes from './Cart.module.css'

export default function Cart({title, image}) {
    return <div className={classes.cartContainer}>
        <h3 className={classes.title}>{title}</h3>
        <img className={classes.image} src={image} alt={title}/>
        <Button label='Shop Now'/>
    </div>
}