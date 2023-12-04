import { useRecoilState } from 'recoil';
import styles from './CardProducts.module.css'
import { IoIosClose } from "react-icons/io";
import { deleteCardState } from '../../States/States';

type Props = {
    title : string,
    img: string,
    price?: string,
}


export default (props : Props ) => {

    const [deleteCard, setDeleteCard] = useRecoilState(deleteCardState)

    const deleteClick = () =>{
         setDeleteCard(!deleteCard)
    }

    return ( 
        <section className= {styles.content}>
         {!deleteCard &&
            <div className= {styles.container}>
            
                <div className= {styles.box}>
                  <div className= {styles.image}>
                    <img src=  {props.img} alt="" />
                  </div>
                   <div className={styles.text}>
                         <div className= {styles.title}>
                             <p> {props.title}</p>
                         </div>
                         <div className= {styles.price}>
                             <span>$ {props.price}</span>
                         </div>
                   </div>
                   <button className={styles.btn} onClick={deleteClick} >
                     <IoIosClose />
                   </button>
                </div>
        
            </div>
         
         }

        </section>
    )
}