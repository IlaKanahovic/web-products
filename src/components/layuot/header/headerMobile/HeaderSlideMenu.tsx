import { HeaderMobileConnection } from "./HeaderMobileConnection";

export function HeaderSideMenu() {
    return (
        <div className="z-10 px-5 bg-white">
            <nav className="">
                <div className="block_link-nav relative">
                    <a className="link_nav block w-full h-full" href=""> Главная </a>
                </div>
                <div className="block_link-nav relative">
                    <a className="link_nav block w-full h-full" href=""> Услуги </a>
                </div>
                <div className="block_link-nav relative">
                    <a className="link_nav block w-full h-full" href=""> Каталог </a>
                </div>
                <div className="block_link-nav relative">
                    <a className="link_nav block w-full h-full" href=""> Портфолио </a>
                </div>
                <div className="block_link-nav relative">
                    <a className="link_nav block w-full h-full" href=""> Обо мне </a>
                </div>
                <div className="block_link-nav relative">
                    <a className="link_nav block w-full h-full" href=""> Контакты </a>
                </div>
                <HeaderMobileConnection />
            </nav>
        </div>
    )
}