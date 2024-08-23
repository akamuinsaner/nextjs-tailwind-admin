import Badge from '@/widgets/Badge';

const BadgePage = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>Basic</h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Badge>Badge</Badge>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>Size</h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Badge size='sm'>small</Badge>
                    <Badge size='md'>medium</Badge>
                    <Badge size='lg'>large</Badge>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>Variant</h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Badge size='sm'>neutral</Badge>
                    <Badge size='md'>neutral</Badge>
                    <Badge size='lg'>neutral</Badge>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Badge size='sm' variant='brand'>
                        brand
                    </Badge>
                    <Badge size='md' variant='brand'>
                        brand
                    </Badge>
                    <Badge size='lg' variant='brand'>
                        brand
                    </Badge>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Badge size='sm' variant='success'>
                        success
                    </Badge>
                    <Badge size='md' variant='success'>
                        success
                    </Badge>
                    <Badge size='lg' variant='success'>
                        success
                    </Badge>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Badge size='sm' variant='warning'>
                        warning
                    </Badge>
                    <Badge size='md' variant='warning'>
                        warning
                    </Badge>
                    <Badge size='lg' variant='warning'>
                        warning
                    </Badge>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Badge size='sm' variant='error'>
                        error
                    </Badge>
                    <Badge size='md' variant='error'>
                        error
                    </Badge>
                    <Badge size='lg' variant='error'>
                        error
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default BadgePage;
