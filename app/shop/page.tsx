import Link from 'next/link'
import styles from './shop.module.css'
import { MdKeyboardArrowRight } from "react-icons/md"
import Products from './Products/Products'

export default function shop () {
    return (
        <>

         <section className= {styles.shopSection}>

               <div className= {styles.container}>
                   <div className= {styles.link}>
                        <div className= {styles.linkContent}>
                            <Link href='/'><p>Home</p></Link>
                            <MdKeyboardArrowRight />
                            <a href="#">All Products</a>
                        </div>
                   </div>
                   <div className= {styles.cover}></div>
                   <div className= {styles.title}>
                     <h1>All Products</h1>
                   </div>
                   <div className= {styles.cardContainer}>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                    </div>
                   




                </div>
            </section>
        
          
        </>
    )
} 