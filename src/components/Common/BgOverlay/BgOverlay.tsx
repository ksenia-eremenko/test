import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useCallback } from 'react';
type HeaderType = {
    setOpenMenu: (openMenu: boolean) => void
    openMenu: boolean
}
const BgOverlay = ({ setOpenMenu, openMenu }: HeaderType) => {
    const resizeHandler = useCallback(() => {
        if (window.matchMedia('(min-width: 767px)').matches) {
            setOpenMenu(false);
        }
    }, [setOpenMenu])

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', () => resizeHandler);
        };
    }, [resizeHandler]);

    const onClickHandler = () => {
        setOpenMenu(false)
    }

    return <div className={classNames(
        'bg-overlay',
        { active: openMenu }
    )} onClick={onClickHandler}></div>
};

export default BgOverlay;