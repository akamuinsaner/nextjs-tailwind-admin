'use client';
import NavBar from '@/widgets/NavBar';
import Logo from './Logo';
import { RiMenuLine } from '@remixicon/react';
import Drawer from '@/widgets/Drawer';
import SideBar from '../SideBar';
import { useState } from 'react';

const Navigation = () => {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    return (
        <NavBar className='flex desktop:hidden'>
            <Logo />
            <RiMenuLine
                className='ml-auto w-5 h-5'
                onClick={() => setOpenSideBar(true)}
            />
            <Drawer open={openSideBar} onClose={() => setOpenSideBar(false)}>
                <SideBar className='h-full w-full flex relative' />
            </Drawer>
        </NavBar>
    );
};

export default Navigation;
