import { forwardRef, memo, useCallback, useState } from 'react';
import { TDrawer } from './types';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';
import useWrapper from './useWrapper';
import useClass from './useClass';

const Drawer = forwardRef<HTMLDivElement, TDrawer>(
    (
        { maskClassName, maskStyle, open, className, children, ...props },
        ref,
    ) => {
        const { classes, close } = useClass({ className });

        const { wrapper, setWrapper } = useWrapper({
            wrapperId: 'drawer-id',
            open,
            close,
        });

        const maskClasses = twMerge(styles.mask.base, maskClassName);

        const onTransitionEnd = () => {
            if (!open) setWrapper(null);
        };

        if (!wrapper) return null;

        return createPortal(
            <div className={maskClasses} style={maskStyle}>
                <div
                    ref={ref}
                    className={classes}
                    onTransitionEnd={onTransitionEnd}
                    {...props}
                >
                    {children}
                </div>
            </div>,
            wrapper,
        );
    },
);

export default memo(Drawer);
