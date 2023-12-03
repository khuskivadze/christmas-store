import { useRecoilState } from 'recoil'
import styles from './Navigation.module.css'
import { opentBurgerState } from '../../../States/States'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NavItems from './NavtItems/NavItems'




export default () => {
    const  [openBurgerMenu ] = useRecoilState (opentBurgerState)
    return (
        <section className= {styles.headerNavigation}>
          { !openBurgerMenu &&
            <div className= {styles.navContainer}>
                <div className= {styles.social}>
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                  <FaPinterestP />
                </div>

                 <NavItems/>
                 
                
                
                <div className={styles.input}>
                    <a href="#" >Log In</a>
                    <a href="#">Cart</a><span>0</span>

                </div>
            </div>
          }

        </section>
    )
}