import { HTMLProps } from 'react';

export interface IBadge extends Omit<HTMLProps<HTMLSpanElement>, 'size'> {
    variant?: 'neutral' | 'error' | 'warning' | 'success' | 'brand';
    size?: 'sm' | 'md' | 'lg';
}
