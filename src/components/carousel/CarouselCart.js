export default function CarouselCart({image, price}){
    return <div className={classes.cartContainer}>
        <img className={classes.cartImage} src={image} alt={title}/>
        <p className={classes.cartPrice}>{price}</p>
        <p></p>
    </div>
}