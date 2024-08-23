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
                key: 'badge',
                name: 'Badge',
            },
            {
                key: 'button',
                name: 'Button',
            },
            {
                key: 'checkbox',
                name: 'Checkbox',
            },
            {
                key: 'input',
                name: 'Input',
            },
        ],
    },
];
