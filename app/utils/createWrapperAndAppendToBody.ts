export const DRAWER_WRAPPER_ID = 'drawer-id';

const createWrapperAndAppendToBody = (id: string): HTMLDivElement => {
    let wrapper: HTMLDivElement = document.getElementById(id) as HTMLDivElement;
    if (wrapper) return wrapper;
    wrapper = document.createElement('div');
    wrapper.setAttribute('id', DRAWER_WRAPPER_ID);
    document.body.appendChild(wrapper);
    return wrapper;
};

export default createWrapperAndAppendToBody;
