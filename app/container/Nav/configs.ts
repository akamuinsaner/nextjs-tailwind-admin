import { INavConfig } from './types';

export const NAVCONFIG: INavConfig[] = [
    {
        name: 'Style',
        key: 'style',
    },
    {
        key: 'components',
        name: 'Components',
        children: [
            {
                key: 'button',
                name: 'Button',
            },
            {
                key: 'link',
                name: 'Link',
            },
        ],
    },
];
