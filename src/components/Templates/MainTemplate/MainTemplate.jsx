/* Components import */
import { Header } from '../../Header/Header'
import Footer from '../../Footer/Footer'

/* Styles import */
import styles from './styles.module.css'
export const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.mainContainer}>
                {children}
            </main>
            <Footer />
        </>

    )
}
