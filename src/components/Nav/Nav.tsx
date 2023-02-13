import classNames from "classnames"
import React, { ReactElement } from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as Key } from "../../assets/icons/key.svg"
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg"
import { ReactComponent as Сube } from "../../assets/icons/cube.svg"
import { ReactComponent as User } from "../../assets/icons/user.svg"
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg"
import { ReactComponent as Discount } from "../../assets/icons/discount.svg"
import { ReactComponent as Question } from "../../assets/icons/question.svg"

type NavType = {
    openMenu: boolean
    setOpenMenu: (openMenu: boolean) => void
}

type ItemsMenuType = Array<ItemMenuType>

type ItemMenuType = {
    link: string
    title: string
    icon: ReactElement
    withArrow: boolean
    classIcon: string
}

const Nav = ({ openMenu, setOpenMenu }: NavType) => {
    const items: ItemsMenuType = [
        {
            link: '/',
            title: 'Dashboard',
            icon: <Key />,
            withArrow: false,
            classIcon: 'stroke'
        },
        {
            link: '/home',
            title: 'Product',
            icon: <Сube />,
            withArrow: true,
            classIcon: 'fill'
        },
        {
            link: '/home2',
            title: 'Customers',
            icon: <User />,
            withArrow: true,
            classIcon: 'fill'
        },
        {
            link: '/home3',
            title: 'Income',
            icon: <Wallet />,
            withArrow: true,
            classIcon: 'stroke'
        },
        {
            link: '/home4',
            title: 'Promote',
            icon: <Discount />,
            withArrow: true,
            classIcon: 'fill'
        },
        {
            link: '/home5',
            title: 'Help',
            icon: <Question />,
            withArrow: true,
            classIcon: 'fill'
        }
    ]
    return (
        <nav>
            <ul className={classNames(
                "nav",
                { active: openMenu }
            )}>
                {items.map((e, i) => {
                    return <li key={i} onClick={() => setOpenMenu(false)}>
                        <NavLink to={e.link} className={({ isActive }: any) => isActive ? "item active" : "item"}>
                            <div className={`icon ${e.classIcon}`}>
                                {e.icon}
                            </div>
                            <span>{e.title}</span>
                            {e.withArrow ? <div className="icon-arrow"><Arrow /></div> : ''}
                        </NavLink>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Nav