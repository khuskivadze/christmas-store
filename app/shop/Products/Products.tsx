
import styles from './Products.module.css'






export default () => {
    return (
        <div className= {styles.card}>
            <div className= {styles.image}>
                <span className= {styles.bottomText}>Queek view</span>
            </div>
            <div className= {styles.info}>
                <p className= {styles.title}>I'm a product</p>
                <span className= {styles.line}></span>
                <span className= {styles.price}>$400.00</span>
            </div>
            <button className= {styles.button}>Add to cart</button>

        </div>
    )
}