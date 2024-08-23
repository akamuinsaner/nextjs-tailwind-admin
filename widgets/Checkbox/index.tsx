import { forwardRef } from 'react';
import { ICheckbox } from './types';

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(({}, ref) => {
    return (
        <span>
            <input type='checkbox' />
        </span>
    );
});

export default Checkbox;
