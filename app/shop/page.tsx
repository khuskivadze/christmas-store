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
                        <Products img='/images/84770f_3d61665c560442849e3ac2f6f7675427~mv2_d_1500_1500_s_2.webp' bottomText ='Queek view' title ='I am product' price='$400.00' button='Add to Cart'/>
                        <Products img='/images/card2.webp'  bottomText ='Queek view' title ='I am product' price='$400.00' button='Add to Cart'/>
                        <Products img='/images/card3.webp'  bottomText ='Queek view' title ='I am product' price='$700.00' button='Add to Cart'/>
                        <Products img='/images/card4.webp'  bottomText ='Queek view' title ='I am product' price='$200.00' button='Add to Cart'/>
                        <Products img='/images/card5.webp'  bottomText ='Queek view' title ='I am product' price='$100.00' button='Add to Cart'/>
                        <Products img='/images/card6.webp'  bottomText ='Queek view' title ='I am product' price='$200.00' button='Add to Cart'/>
                        <Products img='/images/card7.webp'  bottomText ='Queek view' title ='I am product' price='$400.00' button='Add to Cart'/>
                        <Products img='/images/card8.webp'  bottomText ='Queek view' title ='I am product' price='$600.00' button='Add to Cart'/>
                        <Products img='/images/card9.webp'  bottomText ='Queek view' title ='I am product' price='$100.00' button='Add to Cart'/>
                        <Products img='/images/card10.webp' bottomText ='Queek view' title ='I am product' price='$100.00' button='Add to Cart'/>
                        <Products img='/images/card11.webp' bottomText ='Queek view' title ='I am product' price='$200.00' button='Add to Cart'/>
                        <Products img='/images/card12.webp' bottomText ='Queek view' title ='I am product' price='$450.00' button='Add to Cart'/>
                        <Products img='/images/card13.webp' bottomText ='Queek view' title ='I am product' price='$300.00' button='Add to Cart'/>
                        <Products img='/images/card14.webp' bottomText ='Queek view' title ='I am product' price='$120.00' button='Add to Cart'/>
                        <Products img='/images/card15.webp' bottomText ='Queek view' title ='I am product' price='$320.00' button='Add to Cart'/>
                        <Products img='/images/card16.webp' bottomText ='Queek view' title ='I am product' price='$15.00' button='Add to Cart'/>
                        <Products img='/images/card17.webp' bottomText ='Queek view' title ='I am product' price='$400.00' button='Add to Cart'/>
                        <Products img='/images/card18.webp' bottomText ='Queek view' title ='I am product' price='$400.00' button='Add to Cart'/>


                         


                        
                    </div>
                   




                </div>
            </section>
        
          
        </>
    )
} 