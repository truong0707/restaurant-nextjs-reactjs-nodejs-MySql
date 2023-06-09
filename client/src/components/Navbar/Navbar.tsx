/* import library */
import React from 'react';
import Link from 'next/link';
import DrawerToggleButton from '../SideDrawer.js/DrawerToggleButton';
import { StateStore } from '@/pages/login';
import { useDispatch, useSelector } from 'react-redux';
import { BsChatDots } from "react-icons/bs";
import styles from '@/styles/navbar.module.css';
import MenuIcons from '../MenuIcons/MenuIcons';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";


interface MyProps {
    drawerToggleClick: () => void;
    handleLogout: () => void;
    roleMenu: string | null;
}

export default function NavBar(props: MyProps) {
    const userDataLocal = useSelector((state: StateStore) => state.useDataLocal);
    const { userInfoLocal } = userDataLocal;

    return (
        <>
            <header className={styles.toolbar}>
                <nav className={styles.toolbar__navigation}>
                    {/* Open/Close Menu */}
                    <div className={styles.faBar} >
                        <DrawerToggleButton drawerToggleClick={props.drawerToggleClick} />
                    </div>

                    {/* LOGO Nav */}
                    <div style={{ marginLeft: "15px" }}><Link className={styles.toolbar__logo} href="/"><b>NYC</b></Link></div>

                    <div className={styles.spacer}></div>

                    <div className={styles.toolbar__navigation_items}>
                        <ul>
                            <Link className={styles.item__bar} href="/">
                                <li>Home</li>
                            </Link>

                            <Link className={styles.item__bar} href="/shop">
                                <li>Menu</li>
                            </Link>

                            <Link className={styles.item__bar} href="/blog">
                                <li>Blog</li>
                            </Link>

                            <Link className={styles.item__bar} href="/news">
                                <li>Tin Tức</li>
                            </Link>

                            <Link className={styles.item__bar} href="/contacts">
                                <li>Liên hệ</li>
                            </Link>

                            {/* role menu */}
                            {
                                props.roleMenu && props.roleMenu !== "customer" ? <Link className={styles.item__bar} href={`/${props.roleMenu}`}>
                                    <li>
                                        {
                                            props.roleMenu === 'chef' ? 'Vào bếp' : props.roleMenu
                                        }
                                    </li>
                                </Link> : null
                            }
                        </ul>

                    </div>
                    <div className={styles.spacer}></div>

                    {/* <div>
                        <ul style={{ display: 'flex', gap: '1px' }}>
                            <li style={{ marginTop: '12px', listStyle: 'none' }} className={styles.item__bar__card} >
                                <MenuIcons
                                    typeContent="chat"
                                    iconMenu={<BsChatDots style={{ fontSize: "20px" }} />}
                                />
                            </li>
                        </ul>
                    </div> */}

                    <div className={styles.toolbar__navigation_user_store}>
                        <ul>
                            {userInfoLocal && userInfoLocal.data ? (
                                <>
                                    <MenuIcons
                                        typeContent="cart"
                                        iconMenu={<RiShoppingCartLine style={{ fontSize: "20px" }} />}
                                    />

                                    <MenuIcons
                                        typeContent="notification"
                                        iconMenu={
                                            <IoMdNotificationsOutline style={{ fontSize: "25px" }} />
                                        }
                                    />

                                    <MenuIcons
                                        typeContent="loveProduct"
                                        iconMenu={<GiSelfLove style={{ fontSize: "20px" }} />}
                                    />


                                    <Link style={{ textDecoration: 'none' }} href='/profile'>
                                        <li style={{ /* minWidth: '200px', */ textAlign: 'end', alignItems: 'center', height: '55px' }} className={`${styles.profile} ${styles.item__bar}`} /* onClick={handleclickProfile} */>
                                            <img style={{ marginRight: '7px' }} src='https://avatars.githubusercontent.com/u/70809618?s=400&u=4fa5bdd589e6f6bb0f6377be69ba8146f75d389b&v=4' alt='' className={styles.avatar__user} />
                                            {/*  Hi, {userInfoLocal.data.name} */}
                                        </li>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} href=''>
                                        <li className={`${styles.profile} ${styles.item__bar}`} onClick={props.handleLogout}>
                                            logout
                                        </li>
                                    </Link>
                                </>

                            ) : (
                                <>
                                    <Link style={{ width: '100px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className={styles.item__bar} href="/login"><p style={{ margin: 'auto' }}>Đăng Nhập</p></Link>
                                    {/* <Link style={{ width: '80px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className={styles.item__bar} href="/register?redirect=/"><p style={{ margin: 'auto' }}>Đăng Ký</p></Link> */}
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
