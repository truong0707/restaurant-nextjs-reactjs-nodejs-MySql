/* import library */
import { FaBars } from "react-icons/fa";
import styles from '@/styles/styleComponent/sideDrawer.module.css';

export default function DrawerToggleButton(props:any) {

    return (
        <>
            <FaBars onClick={props.drawerToggleClick} className={styles.icon_drawer} />
        </>
    );
}