import Button from '@/app/widgets/Button';
import IconButton from '@/app/widgets/Button/IconButton';
import Link from '@/app/widgets/Button/Link';
import { RiMenuLine } from '@remixicon/react';

const ButtonPage = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>Basic</h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Button>Button</Button>
                    <IconButton>
                        <RiMenuLine />
                    </IconButton>
                    <Link>Link</Link>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>Size</h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Button size='sm'>small</Button>
                    <Button size='md'>medium</Button>
                    <Button size='lg'>large</Button>
                    <Button size='xl'>extra large</Button>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <IconButton size='sm'>
                        <RiMenuLine />
                    </IconButton>
                    <IconButton size='md'>
                        <RiMenuLine />
                    </IconButton>
                    <IconButton size='lg'>
                        <RiMenuLine />
                    </IconButton>
                    <IconButton size='xl'>
                        <RiMenuLine />
                    </IconButton>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Link size='sm'>small</Link>
                    <Link size='md'>medium</Link>
                    <Link size='lg'>large</Link>
                    <Link size='xl'>extra large</Link>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>Variant</h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Button variant='primary'>primary</Button>
                    <IconButton variant='primary'>
                        <RiMenuLine />
                    </IconButton>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Button variant='secondary'>secondary</Button>
                    <IconButton variant='secondary'>
                        <RiMenuLine />
                    </IconButton>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Button variant='tertiary'>tertiary</Button>
                    <IconButton variant='tertiary'>
                        <RiMenuLine />
                    </IconButton>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Button variant='destructive'>destructive</Button>
                    <IconButton variant='destructive'>
                        <RiMenuLine />
                    </IconButton>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>
                    Disabled
                </h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Button disabled={true}>Disabled</Button>
                    <IconButton disabled={true}>
                        <RiMenuLine />
                    </IconButton>
                    <Link disabled={true}>Disabled</Link>
                </div>
            </div>
        </div>
    );
};

export default ButtonPage;
