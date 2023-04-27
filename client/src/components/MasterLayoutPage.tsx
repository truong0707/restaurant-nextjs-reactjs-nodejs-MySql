import React, { useEffect, useState } from 'react'
import NavBar from './Navbar/Navbar';
import SideDrawer from './SideDrawer.js/SideDrawer';
import BackDropNav from './BackDrop/BackDropNav';
import { useDispatch } from 'react-redux';
import { GET_DATA_USER_LOCAL_STORAGE } from '@/store/redux/constants/localData';
import { logout } from '@/store/redux/actions/userActions';

interface MasterLayoutPage {
    children: React.ReactNode;
}
interface Prev {
    sideDrawerOpen: boolean
}

export default function MasterLayoutPage({ children }: MasterLayoutPage) {
    const dispatch = useDispatch();
    useEffect(() => {
        let getDataUserLocal = localStorage.getItem("userInfo");
        if (getDataUserLocal) {
            const parserDataUser = JSON.parse(getDataUserLocal || '')
            dispatch({ type: GET_DATA_USER_LOCAL_STORAGE, payload: parserDataUser });
        }
    }, []);

    // Xử lý logout
    const logAutPromise = logout();
    const handleLogout = () => {
        // dispatch(logout())
        logAutPromise(dispatch);
    }


    /* xử lý đóng mở thanh menu nav */
    const [sideDrawerOpen, setSideDrawerOpen] = useState<{}>(false);

    const handleOpenDrawerToggleClick = () => {
        setSideDrawerOpen((prevState: Prev) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    }

    const handleCloseDrawerToggleClick = () => {
        return setSideDrawerOpen(false);
    }
    return (
        <>
            <NavBar handleLogout={handleLogout} drawerToggleClick={handleOpenDrawerToggleClick} />
            <>
                {sideDrawerOpen ? <SideDrawer handleLogout={handleLogout} /> : null}
                {sideDrawerOpen ? <BackDropNav HandleCloseDrawerToggleClick={handleCloseDrawerToggleClick} /> : null}
            </>
            {children}
        </>
    )
}
