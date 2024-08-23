import { forwardRef } from 'react';
import { IBadge } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';

const Badge = forwardRef<HTMLSpanElement, IBadge>(
    (
        { className, children, size = 'md', variant = 'neutral', ...props },
        ref,
    ) => {
        const classes = twMerge(
            styles.base,
            classNames({
                [styles.size[size]]: !!size,
                [styles.variant[variant]]: !!variant,
            }),
        );
        return (
            <span {...props} ref={ref} className={classes}>
                {children}
            </span>
        );
    },
);

export default Badge;
