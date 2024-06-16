import classes from './Button.module.css'

export default function Button({label, ...props}) {
    return <button className={classes.button} {...props}>{label}</button>
}