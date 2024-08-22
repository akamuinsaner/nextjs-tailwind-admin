import createWrapperAndAppendToBody from '@/app/utils/createWrapperAndAppendToBody';
import { useEffect, useState } from 'react';

const useWrapper = ({
    close,
    wrapperId = 'wrapper-id',
    open,
}: {
    close: () => void;
    wrapperId: string;
    open: boolean;
}) => {
    const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (open) {
            const wrapper = createWrapperAndAppendToBody(wrapperId);
            setWrapper(wrapper);
        } else {
            close();
        }
    }, [open]);

    return { wrapper, setWrapper };
};

export default useWrapper;
