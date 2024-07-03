import { ReactNode } from "react"
import styles from "./Alert.module.css"

const Alert = ({children} : {children : ReactNode}) => {
    return (
        <div className={styles.alert}>
            <p>{children}</p>
        </div>
    )
}

export default Alert