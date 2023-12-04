'use client'
import { useRecoilState } from 'recoil';
import styles from './Cart.module.css'
import { FaRegWindowClose } from "react-icons/fa";
import { AddCardState, CartState } from '../../States/States';
import CardProduct from '../../shop/CardProduct/CardProduct';
 


export default () => {
    
    const  [CartMenu, setCartMenu ] = useRecoilState (CartState);
    const close = () => {
        setCartMenu(!CartMenu)
    }
 
    const [addCard, setAddCard] = useRecoilState (AddCardState)
     
    




    return (
     <> 
         
      { CartMenu &&
        <section className= {styles.cart} >
            
                <div className= {styles.content}>
                    <div className= {styles.close} onClick={close} >
                        <FaRegWindowClose />
                    </div>
    
                    <div className= {styles.text}>
                        <h3 className= {styles.title}>Cart</h3>
                    </div>


                     
    
                     
                </div>

                {addCard &&
                   <>
                     <CardProduct  img='/images/card2.webp' title='i am product' price='200'/>
                    
                   </>

                }
    
        </section>
      }
      </>

        
    )
}