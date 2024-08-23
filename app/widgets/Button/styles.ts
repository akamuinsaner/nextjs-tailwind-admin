export const styles = {
    button: {
        base: 'flex items-center outline-none bg-transparent border-none rounded shadow font-medium',
        varaint: {
            primary:
                'text-primary-invert bg-brand-primary hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize focus:ring-4 focus:ring-focus/[.12]',
            secondary:
                'text-primary bg-primary border-primary hover:bg-primary-hover focus:bg-primary-hover focus:ring-4 focus:ring-focus/[.12]',
            tertiary:
                'text-brand hover:bg-primary-hover focus:bg-primary-hover focus:ring-4 focus:ring-focus/[.12]',
            destructive:
                'text-primary-invert bg-error hover:bg-error-emphasize focus:bg-error-emphasize focus:ring-4 focus:ring-[#D92D20]/[.12]',
        },
        size: {
            sm: 'px-3.5 py-2.5 text-sm gap-1',
            md: 'px-4 py-2.5 text-base gap-1.5',
            lg: 'px-5 py-3 text-base gap-1.5',
            xl: 'px-6 py-4 text-lg gap-2.5',
        },
        disabled:
            'bg-disabled text-disabled select-none pointer-event-none border-none',
    },
};
