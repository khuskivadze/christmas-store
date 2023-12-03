import HeaderCover from '../HeaderCover/HeaderCover'
import MainBanner from './MainBanner/MainBanner'
import MainCards from './MainCards/MainCards'
import MainContact from './MainContact/MainContact'
import styles from './MainContainer.module.css'




export default () => {
    return (
        <main className= {styles.mainContainer}> 
            <HeaderCover/>
            <MainCards/>
            <MainBanner/>
            <MainContact/>
 
        </main>
    )
}