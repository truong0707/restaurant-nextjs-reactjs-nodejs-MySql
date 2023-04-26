import styles from '@/styles/styleComponent/sideDrawer.module.css';
import Link from 'next/link';

export default function SideDrawer() {
    return (
        <>
            <nav className={styles.side_drawer}>
                <ul>
                    <li> <Link href="/">Home</Link></li>
                    <li> <Link href="/shop">Shop</Link></li>
                    <li> <Link href="/blog">Blog</Link></li>
                    <li> <Link href="/news">News</Link></li>
                    <li> <Link href="/contacts">Contact</Link></li>
                    <li> <Link href="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    );
}