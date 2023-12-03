import styles from './MaincContact.module.css'



export default () => {

    return (
        <section className= {styles.contactContainer}>

            <div className= {styles.title}>
                <span>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</span>
            </div>

            <form action="" className= {styles.forms}>

                <div className= {styles.top}>
                    <input type="text" placeholder='Name' />
                    <input type="email"  placeholder='Email'/>
                </div>
                <div className= {styles.center}>
                    <input type="subject"  placeholder=' Subject'/>
                </div>

                <textarea name="textarea" id="" placeholder='Message'></textarea>

                <input type="submit"  placeholder='Submit' className= {styles.submit}/>



            </form>


            <div className= {styles.text}>
                <h1>Contact Us</h1>
                <span className= {styles.line}></span>
            </div>

        </section>
    )

}