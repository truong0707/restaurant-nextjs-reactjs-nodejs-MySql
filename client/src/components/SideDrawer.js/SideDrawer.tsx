import { StateStore } from '@/pages/login';
import styles from '@/styles/styleComponent/sideDrawer.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';


interface MySideDrawerNav {
    handleLogout: () => void;
}

export default function SideDrawer(props: MySideDrawerNav) {

    const userDataLocal = useSelector((state: StateStore) => state.useDataLocal);
    const { userInfoLocal } = userDataLocal;
    return (
        <>
            <nav className={styles.side_drawer}>
                <ul>
                    {userInfoLocal && userInfoLocal.data ? (
                        <li /* onClick={handleclickProfile} */>
                            <Link style={{ textDecoration: 'none' }} href='/profile'>

                                <img style={{ marginRight: '7px', marginLeft: '-3px', width: '50px', borderRadius: '100%' }} src='https://avatars.githubusercontent.com/u/70809618?s=400&u=4fa5bdd589e6f6bb0f6377be69ba8146f75d389b&v=4' alt='' className={styles.avatar__user} />
                                Hi, {userInfoLocal.data.name}

                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link href="/login"><p>Đăng Nhập</p></Link>
                        </li>
                    )}
                    <li> <Link href="/">Home</Link></li>
                    <li> <Link href="/shop">Shop</Link></li>
                    <li> <Link href="/blog">Blog</Link></li>
                    <li> <Link href="/news">News</Link></li>
                    <li> <Link href="/contacts">Contact</Link></li>
                    <li> <Link href="/login">Login</Link></li>


                    {userInfoLocal && userInfoLocal.data ? (
                        <>
                            <Link style={{ textDecoration: 'none' }} href=''>
                                <li className={`${styles.profile} ${styles.item__bar}`} onClick={props.handleLogout}>
                                    logout
                                </li>
                            </Link>
                        </>

                    ) : null}
                </ul>
            </nav>
        </>
    );
}