import { TContainer } from './types';
import { FC } from 'react';
import Navigation from './Navigation';

const Container: FC<TContainer> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] px-4 py-4 pt-[100px]'>
            <Navigation />
            <main className='flex-1 bg-primary rounded-md shadow-lg'></main>
        </div>
    );
};

export default Container;
