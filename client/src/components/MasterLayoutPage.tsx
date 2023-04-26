import Link from 'next/link';
import React, { useState } from 'react'
import NavBar from './Navbar/Navbar';
import SideDrawer from './SideDrawer.js/SideDrawer';
import BackDropNav from './BackDrop/BackDropNav';

interface MasterLayoutPage {
    children: React.ReactNode;
}
interface Prev {
    sideDrawerOpen: boolean
}

export default function MasterLayoutPage({ children }: MasterLayoutPage) {
    /* xử lý đóng mở thanh menu nav */
    const [sideDrawerOpen, setSideDrawerOpen] = useState<{}>(false);

    const handleOpenDrawerToggleClick = () => {
        console.log(sideDrawerOpen)
        setSideDrawerOpen((prevState: Prev) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    }

    const handleCloseDrawerToggleClick = () => {
        return setSideDrawerOpen(false);
    }
    return (
        <>
            <NavBar drawerToggleClick={handleOpenDrawerToggleClick} />
            <>
                {sideDrawerOpen ? <SideDrawer /> : null}
                {sideDrawerOpen ? <BackDropNav HandleCloseDrawerToggleClick={handleCloseDrawerToggleClick} /> : null}
            </>

            <Link href='/about'>
                dâd
            </Link>
            {children}
        </>
    )
}
