import { forwardRef, memo } from 'react';
import { TButton } from './types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const Button = forwardRef<HTMLButtonElement, TButton>(({}, ref) => {
    return <button ref={ref}></button>;
});

export default Button;
