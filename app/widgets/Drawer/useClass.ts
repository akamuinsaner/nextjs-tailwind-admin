import { useCallback, useMemo, useState } from 'react';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

const useClass = ({ className }: { className: string }) => {
    const [classes, setClasses] = useState<string>(styles.base);

    const close = useCallback(() => {
        setClasses(styles.base);
    }, []);

    const widgetClasses = useMemo(() => {
        return twMerge(classes, className);
    }, []);

    return {
        classes: widgetClasses,
        close,
    };
};

export default useClass;
