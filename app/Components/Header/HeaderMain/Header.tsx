'use client'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
 import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from './Header.module.css'
import { opentBurgerState } from '../../../States/States';
import Navigation from '../Navigation/Navigation';
import HeaderCover from '../../HeaderCover/HeaderCover';

export default () => {


    const  [openBurgerMenu,  setOpenBurgerMenu ] = useRecoilState (opentBurgerState)
    const onClick = () => {
       setOpenBurgerMenu (!openBurgerMenu)
    }

    return (
     <> 

        <header className={styles.header}>
          <div className= {styles.contaiiner}>
             <div className= {styles.top}>
                 <div className= {styles.headerTitle}>
                        <h1>THE CHRISTMAS BOUTIQUE</h1>
                 </div>
            
                 <div className= {styles.burger}   onClick={onClick} >
                     <CiMenuBurger />
                 </div>
             </div>
             <div className= {styles.menu}>
                 <div className= {styles.social}>
                     <div className= {styles.icon}>
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTwitter />
                                <FaPinterestP />
                     </div>
                     <div className={styles.input}>
                                 <a href="#" >Log In</a>
                                 <a href="#">Cart</a><span>0</span>
                     </div>
                 </div>
             </div>
           </div>
           
           <Navigation/>
            
        </header>

        <HeaderCover/>
     
     </>
      

    )
}