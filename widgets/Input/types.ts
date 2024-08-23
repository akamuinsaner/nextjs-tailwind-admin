import { HTMLProps } from 'react';

export interface IInput extends HTMLProps<HTMLInputElement> {
    error?: boolean;
    label?: string;
}
