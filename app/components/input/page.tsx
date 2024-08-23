import Input from '@/widgets/Input';

const InputPage = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl font-semibold text-primary'>Basic</h3>
                <div className='flex items-center gap-4 flex-wrap'>
                    <Input placeholder='placeholder' />
                    <Input placeholder='error' error />
                    <Input placeholder='disabled' disabled />
                </div>
            </div>
        </div>
    );
};

export default InputPage;
