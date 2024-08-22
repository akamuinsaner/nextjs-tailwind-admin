import { CSSProperties, HTMLProps } from 'react';

export interface TDrawer extends HTMLProps<HTMLDivElement> {
    open: boolean;
    maskClassName: string;
    maskStyle: CSSProperties;
}
