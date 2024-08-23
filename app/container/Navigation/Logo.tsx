import CommandLine from 'remixicon/icons/Development/command-line.svg';

const Logo = () => {
    return (
        <a className='flex items-center' href='/' aria-label='logo'>
            <img className='h-8 w-8' alt='logo' />
            <h1 className='font-bold text-base text-primary'>NTAdmin</h1>
        </a>
    );
};

export default Logo;
