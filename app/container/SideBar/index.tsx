import Logo from '../Navigation/Logo';
import { styles } from './styles';
import Nav from '../Nav';
import { twMerge } from 'tailwind-merge';

const SideBar = ({ className }: { className?: string }) => {
    return (
        <aside className={twMerge(styles.base, className)}>
            <div className='py-4 px-1'>
                <Logo />
            </div>
            <Nav />
        </aside>
    );
};

export default SideBar;
