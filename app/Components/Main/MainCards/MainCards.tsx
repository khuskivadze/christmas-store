import styles from './MainCards.module.css'




export default () => {
    return (
        <section className= {styles.CardsContainer}>

         <div className=  {styles.cardContent}>
             <div className= {styles.img}>
                 <img src="/images/84770f_3d61665c560442849e3ac2f6f7675427~mv2_d_1500_1500_s_2.webp" alt="" />
             </div>
             <div className= {styles.img}>
                 <img src="images/84770f_0a0ede78262c4c5e86861c5c598e82e6~mv2_d_1500_1500_s_2.webp" alt="" />
             </div>
             <div className= {styles.img}>
                 <img src="/images/84770f_8ef70e422ee7477b8237772b4cd69cd3~mv2_d_1500_1500_s_2.webp" alt="" />
             </div>
         </div>

         <div className= {styles.cardTitle}>
             <div className= {styles.title}>
                  <h1>Christmas Trees</h1>
                  <span className= {styles.line}></span>
                  <a href="#">Shop Collection</a>
             </div>
             <div className= {styles.title}>
                  <h1>Christmas Trees</h1>
                  <span className= {styles.line}></span>
                  <a href="#">Shop Collection</a>
             </div>
             <div className= {styles.title}>
                  <h1>Christmas Trees</h1>
                  <span className= {styles.line}></span>
                  <a href="#">Shop Collection</a>
             </div>
         </div>

        </section>

    )
}