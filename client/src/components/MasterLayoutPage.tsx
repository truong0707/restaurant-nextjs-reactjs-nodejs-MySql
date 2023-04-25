import Link from 'next/link';
import React from 'react'
import NavBar from './Navbar/Navbar';

interface MasterLayoutPage {
    children: React.ReactNode;
}

export default function MasterLayoutPage({ children }: MasterLayoutPage) {
    return (
        <>
        <NavBar/>
            <Link href='/about'>
                dâd
            </Link>
            {children}
        </>
    )
}
