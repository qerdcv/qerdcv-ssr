import { useContext } from "react"
import { ThemeContext } from "context/theme";
import styles from 'styles/theme.module.scss';

export const Theme = () => {
    const {theme, switchTheme} = useContext(ThemeContext);
    return (
        <button className={styles.themeButton} onClick={switchTheme}>Switch theme</button>
    )
}