import Link from "next/link"
import styles from './NavItems.module.css'


export default () => {
    return(
        <nav className= {styles.navItem}>
            <Link href='/'><li>HOME</li></Link>
            <Link href='/Components/'><li>SHOP ALL</li></Link>
            <Link href='/Components/'><li>CHRISTMAS TREES</li></Link>
            <Link href='/Components/'><li>UNIQUE ORNAMENTS</li></Link>
            <Link href='/Components/'><li>HOLIDAY LIGHTS</li></Link>
            <Link href='/Components/'><li>ABOUT</li></Link>
            <Link href='/Components/'><li>CONTACT</li></Link>
            
        </nav>
    )
}