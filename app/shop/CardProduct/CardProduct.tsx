import styles from './CardProducts.module.css'


export default () => {
    return ( 
        <section className= {styles.content}>
            <div className= {styles.container}>
                <div className= {styles.box}>
                  <div className= {styles.image}>
                     <img src="" alt="" />
                  </div>
                   <div className={styles.text}>
                         <div className= {styles.title}>
                             <p>I'm product</p>
                         </div>
                         <div className= {styles.price}>
                             <span>$ 200.00 </span>
                         </div>
                   </div>
                </div>

            </div>


        </section>
    )
}