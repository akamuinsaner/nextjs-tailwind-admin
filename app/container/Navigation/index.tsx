import NavBar from '@/app/widgets/NavBar';

const Navigation = () => {
    return (
        <NavBar>
            <a className='flex items-center' href='/' aria-label='logo'>
                <img className='h-8 w-8' alt='logo' />
                <h1 className='font-bold text-base text-primary'>NTAdmin</h1>
            </a>
        </NavBar>
    );
};

export default Navigation;
