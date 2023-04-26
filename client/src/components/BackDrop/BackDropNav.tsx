import React from 'react';
import styles from '@/styles/styleComponent/backdrop.module.css';

interface MyProps {
    HandleCloseDrawerToggleClick: () => void
}
export default function BackDropNav(props: MyProps) {
    return (
        <div className={styles.back__drop__nav} onClick={props.HandleCloseDrawerToggleClick} ></div>
    )
}
