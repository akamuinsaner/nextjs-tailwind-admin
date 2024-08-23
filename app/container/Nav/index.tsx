'use client';
import { MouseEventHandler, useCallback } from 'react';
import { NAVCONFIG } from './configs';
import { INavConfig } from './types';

const Nav = () => {
    const onItemClick = useCallback((nav: INavConfig) => {
        const handler: MouseEventHandler<HTMLAnchorElement> = e => {
            const hasChildren = nav?.children && nav.children.length;
            if (!hasChildren) return;
            e.preventDefault();
        };
        return handler;
    }, []);

    const renderNav = useCallback(
        (
            list: INavConfig[] = [],
            depth: number = 0,
            parentKey: string = '',
        ) => {
            return (
                <ul role='navigation' aria-label='navigation'>
                    {list.map(nav => {
                        const path = `${parentKey}/${nav.key}`;
                        return (
                            <li key={nav.key}>
                                <a
                                    href={path}
                                    className='rounded p-1.5 bg-primary hover:bg-primary-hover flex focus:text-brand focus:bg-primary-hover'
                                    style={{
                                        paddingLeft: `${6 * (depth + 1)}px`,
                                    }}
                                    onClick={onItemClick(nav)}
                                >
                                    {nav.name}
                                </a>
                                {renderNav(nav.children, depth + 1, path)}
                            </li>
                        );
                    })}
                </ul>
            );
        },
        [],
    );

    return <>{renderNav(NAVCONFIG)}</>;
};

export default Nav;
