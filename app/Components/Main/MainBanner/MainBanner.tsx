
import styles from './MainBanner.module.css'

export default () => {
    return (

        <div className= {styles.bannerContent}>
            <div className={styles.leftSide}></div>
            <div className={styles.center}>
                <div className= {styles.content}>
                    <h1>BUY ONLINE NOW AND GET 10% OFF</h1>
                    <span className= {styles.line}></span>
                    <h1>USE PROMO CODE HOHOHO</h1>
                     
                </div>
                <a href="#" className= {styles.btn}> Shop Now</a>

            </div>
            <div className={styles.rightSide}></div>
        </div>

    )
}