export const styles = {
    wrapper: {
        base: 'inline-flex items-center px-3.5 py-2.5 gap-2 bg-tertiary border border-solid border-primary rounded text-primary w-full hover:border-brand-solid focus:border-brand-solid',
        focus: ' ring-4 ring-brand-solid/[.12]',
        error: 'border-error focus:ring-4 focus:ring-error/[.12] hover:border-error',
        disabled:
            'select-none pointer-event-none border-disabled bg-tertiary text-disabled hover:border-disabled focus:ring-none',
    },
    input: {
        base: 'flex-1 outline-none border-none bg-transparent text-sm placeholder:text-tertiary text-inherit',
        disabled: 'placeholder:text-disabled',
    },
};
