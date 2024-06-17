import classes from './CarouselCart.module.css'

export default function CarouselCart({image, price, description, title}){
    return <div className={classes.cartContainer}>
        <img className={classes.cartImage} src={image} alt={title}/>
        <p className={classes.cartPrice}><a href='/'>{price}</a></p>
        <p className={classes.cartDescription}>{description}</p>
        <p className={classes.cartName}>-{title}</p>
    </div>
}