'use client'

export function HeaderDesctopNav() {
    return (
        <nav className="flex gap-3 cursor-pointer">
            <a className="link_nav" href=""> Главная </a>
            <a className="link_nav" href=""> Услуги </a>
            <a className="link_nav" href=""> Каталог </a>
            <a className="link_nav" href=""> Портфолио </a>
            <a className="link_nav" href=""> Обо мне </a>
            <a className="link_nav" href=""> Контакты </a>
        </nav>
    )
}