'use client'
import { useRecoilState } from 'recoil'
import styles from './Products.module.css'
import { AddCardState } from '../../States/States'



 type Props = {
    bottomText ?: string,
    title ?:string,
    price: string,
    button:string,
    img:string,
    line?: string

 }


export default (props: Props) => {

    const [addCard, setAddCard] = useRecoilState (AddCardState)

    const addCardClik  = () => {
        setAddCard(!addCard)
    }


    return (
        <> 
        {  
        <div className= {styles.card}>
            <div className= {styles.image}>
                <img src={props.img} alt="" />
                <span className= {styles.bottomText}> {props.bottomText} </span>
                
            </div>
            <div className= {styles.info}>
                <p className= {styles.title}> {props.title}</p>
                <span className= {styles.line}></span>
                <span className= {styles.price}>{props.price}</span>
            </div>
            <button className= {styles.button} onClick={addCardClik}> {props.button}</button>
        </div>
}
        </>
    )
}