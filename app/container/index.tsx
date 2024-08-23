import { TContainer } from './types';
import { FC } from 'react';
import Navigation from './Navigation';
import SideBar from './SideBar';

const Container: FC<TContainer> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] px-4 py-4 pt-[100px] desktop:pt-4 desktop:pl-[256px]'>
            <SideBar />
            <Navigation />
            <main className='flex-1 flex bg-primary rounded-md shadow-lg'>
                <div className='w-full desktop:max-w-[960px] mx-auto h-full px-6 tablet:px-8 py-[112px]'>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Container;
