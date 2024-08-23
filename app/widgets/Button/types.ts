import { HTMLProps } from 'react';

export interface TButton extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
    size: 'sm' | 'md' | 'lg' | 'xl';
}
