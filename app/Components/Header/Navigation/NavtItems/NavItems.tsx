import Link from "next/link"
import styles from './NavItems.module.css'


export default () => {
    return(
        <nav className= {styles.navItem}>
            <Link href='/'><li>HOME</li></Link>
            <Link href='shop'><li>SHOP ALL</li></Link>
            <Link href=''><li>CHRISTMAS TREES</li></Link>
            <Link href=''><li>UNIQUE ORNAMENTS</li></Link>
            <Link href=''><li>HOLIDAY LIGHTS</li></Link>
            <Link href=''><li>ABOUT</li></Link>
            <Link href=''><li>CONTACT</li></Link>
            
        </nav>
    )
}