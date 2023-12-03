import MainBanner from './MainBanner/MainBanner'
import MainCards from './MainCards/MainCards'
import MainContact from './MainContact/MainContact'
import styles from './MainContainer.module.css'




export default () => {
    return (
        <main className= {styles.mainContainer}>
            <MainCards/>
            <MainBanner/>
            <MainContact/>
 
        </main>
    )
}