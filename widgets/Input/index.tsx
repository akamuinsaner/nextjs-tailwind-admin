'use client';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { IInput } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';

const Input = forwardRef<HTMLInputElement, IInput>(
    ({ className, style, error, ...props }, ref) => {
        const [focused, setFocused] = useState<boolean>(false);
        const inputRef = useRef<HTMLInputElement>(null);
        const wrapperClasses = twMerge(
            styles.wrapper.base,
            classNames({
                [styles.wrapper.error]: error,
                [styles.wrapper.disabled]: props.disabled,
            }),
            className,
        );
        const inputClasses = twMerge(
            styles.input.base,
            classNames({
                [styles.input.disabled]: props.disabled,
            }),
        );

        useEffect(() => {}, []);

        return (
            <span
                role='textbox'
                tabIndex={0}
                className={wrapperClasses}
                aria-disabled={props.disabled}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                ref={ref}
            >
                <input ref={inputRef} className={inputClasses} {...props} />
            </span>
        );
    },
);

export default Input;
