
import { Header } from '../../Header/Header'

import styles from './styles.module.css'
import Footer from '../../Footer/Footer'
export const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.mainContainer}>
                {children}
            </main>
            <Footer/>
        </>

    )
}
