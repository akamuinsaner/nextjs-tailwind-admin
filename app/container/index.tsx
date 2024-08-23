import { TContainer } from './types';
import { FC } from 'react';
import Navigation from './Navigation';
import SideBar from './SideBar';

const Container: FC<TContainer> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] px-4 py-4 pt-[100px] desktop:pt-4 desktop:pl-[256px]'>
            <SideBar />
            <Navigation />
            <main className='flex-1 flex bg-primary rounded-md shadow-lg'></main>
        </div>
    );
};

export default Container;
