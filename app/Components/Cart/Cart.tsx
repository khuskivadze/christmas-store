'use client'
import { useRecoilState } from 'recoil';
import styles from './Cart.module.css'
import { FaRegWindowClose } from "react-icons/fa";
import { CartState } from '../../States/States';
 


export default () => {
    
    const  [CartMenu, setCartMenu ] = useRecoilState (CartState);
    const close = () => {
        setCartMenu(!CartMenu)
    }
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
    
        </section>
      }
      </>

        
    )
}