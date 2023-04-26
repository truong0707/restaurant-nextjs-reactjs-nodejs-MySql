/* import library */
import React, { useState } from 'react';
import Link from 'next/link';
import DrawerToggleButton from '../SideDrawer.js/DrawerToggleButton';
import styles from '@/styles/navbar.module.css';



interface MyProps {
    drawerToggleClick: () => void;
}

export default function NavBar(props: MyProps) {

    return (
        <>
            <header className={styles.toolbar}>
                <nav className={styles.toolbar__navigation}>
                    {/* Open/Close Menu */}
                    <div className={styles.faBar} >
                        <DrawerToggleButton drawerToggleClick={props.drawerToggleClick} />
                    </div>

                    {/* LOGO Nav */}
                    <div style={{ marginLeft: "15px" }}><Link className={styles.toolbar__logo} href="/"><b>Logo</b></Link></div>

                    <div className={styles.spacer}></div>

                    <div className={styles.toolbar__navigation_items}>
                        <ul>
                            <Link className={styles.item__bar} href="/">
                                <li>Home</li>
                            </Link>

                            <Link className={styles.item__bar} href="/shop">
                                <li>Shop</li>
                            </Link>

                            <Link className={styles.item__bar} href="/blog">
                                <li>Blog</li>
                            </Link>

                            <Link className={styles.item__bar} href="/news">
                                <li>News</li>
                            </Link>

                            <Link className={styles.item__bar} href="/contacts">
                                <li>Contacts</li>
                            </Link>
                        </ul>

                    </div>
                    <div className={styles.spacer}></div>

                    <div>
                        <ul>
                            <li style={{ marginTop: '12px', listStyle: 'none' }} className={styles.item__bar__card} >
                                {/* cart */}
                                {/* <CartDrawerToggle /> */}
                                {/* {cartItems.length > 0 && <div className='item__count'>
                                                <span><b>{cartItems.length}</b></span>
                                            </div>} */}
                            </li>
                        </ul>
                    </div>

                    <div className={styles.toolbar__navigation_user_store}>
                        <ul>
                            {/* {userInfo ? (
                                <>
                                    <Link style={{ textDecoration: 'none' }} to='/profile'>
                                        <li style={{ minWidth: '250px', textAlign: 'end', alignItems: 'center', height: '50px' }} className='profile item__bar' onClick={handleclickProfile}>
                                            <img style={{ marginRight: '7px' }} src='https://avatars.githubusercontent.com/u/70809618?s=400&u=4fa5bdd589e6f6bb0f6377be69ba8146f75d389b&v=4' alt='' className='avatar__user' />
                                            Hi, {userInfo.name}
                                        </li>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} to=''>
                                        <li className='profile item__bar' onClick={handleLogout}>
                                            logout
                                        </li>
                                    </Link>
                                </>

                            ) : (
                                <>
                                    <Link style={{ width: '100px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className="item__bar" to="/login"><p style={{ margin: 'auto' }}>Đăng Nhập</p></Link>
                                    <Link style={{ width: '80px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className="item__bar" to="/register?redirect=/"><p style={{ margin: 'auto' }}>Đăng Ký</p></Link>
                                </>
                            )} */}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
