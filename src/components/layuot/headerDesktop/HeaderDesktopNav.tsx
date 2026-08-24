'use client'

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function HeaderDesktopNav() {
    return (
        <div className="flex gap-6">
            <div className="nav-desktop-only">
                <a className="link_nav-header group" href="">
                    Главная
                    <MdOutlineKeyboardArrowDown className="mt-1.5 size-4 duration-300 group-hover:translate-y-0.5" />
                </a>
            </div>
            <a className="link_nav-header group" href="">
                Услуги
                <MdOutlineKeyboardArrowDown className="mt-1.5 size-4 duration-300 group-hover:translate-y-0.5" />
            </a>
            <a className="link_nav-header group" href="">
                Каталог
                <MdOutlineKeyboardArrowDown className="mt-1.5 size-4 duration-300 group-hover:translate-y-0.5" />
            </a>
            <a className="link_nav-header group" href="">
                Портфолио
                <MdOutlineKeyboardArrowDown className="mt-1.5 size-4 duration-300 group-hover:translate-y-0.5" />
            </a>
            <a className="link_nav-header group" href="">
                О нас
                <MdOutlineKeyboardArrowDown className="mt-1.5 size-4 duration-300 group-hover:translate-y-0.5" />
            </a>
            <a className="link_nav-header group" href="">
                Контакты
                <MdOutlineKeyboardArrowDown className="mt-1 size-4 duration-300 group-hover:translate-y-0.5" />
            </a>
        </div>
    )
}