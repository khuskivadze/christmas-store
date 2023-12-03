import Link from 'next/link'
import styles from './Footer.module.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa'



export default () =>{
    return (

        <footer className= {styles.footer}>

            <div className= {styles.container}>

                <div className= {styles.top}>
                    <img src="/images/c4a816_8067a3b0de5745dda0baac8a555294fc~mv2.webp" alt="" />
                    <h1>THE CHRISTMAS BOUTIQUE</h1>
                </div>
                <div className= {styles.line}></div>
                <div className= {styles.center}>
                 <nav className= {styles.nav}>
                    <Link href='/'>
                        <li>
                            HOME
                            <span className= {styles.line}></span >
                        </li>  
                    </Link>
                    <Link href='/components/Home'>
                        <li>SHOP ALL  <span className= {styles.line}></span ></li>
                    </Link>
                    <Link href='/components/Home'>
                        <li>CHRISTMAS TREES  <span className= {styles.line}></span ></li>
                    </Link>
                    <Link href='/components/Home'>
                        <li>UNIQUE ORNAMENTS  <span className= {styles.line}></span ></li>
                    </Link>
                    <Link href='/components/Home'>
                        <li>HOLIDAY LIGHTS <span className= {styles.line}></span ></li>
                    </Link>
                    <Link href='/components/Home'>
                        <li>ABOUT  <span className= {styles.line}></span ></li>
                    </Link>
                    <Link href='/components/Home'>
                        <li>CONTACT </li>
                    </Link>
                 </nav>
                </div>
                <div className= {styles.bottom}>
                   <div className= {styles.text}>
                     <span>Follow us and have a Merry Christmas</span>
                   </div>
                   <div className= {styles.social}>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaPinterestP />
                  </div>
                  <div className= {styles.info}>
                     <a href=""> Shipping & Returns</a>
                     <a href="">Privacy Policy</a>
                     <a href="">FAQ</a>
                  </div>
                </div>
            </div>
        </footer>
        
    )
}