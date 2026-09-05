import { FaArrowRightLong } from "react-icons/fa6";
import { HeaderMobileConnection } from "./HeaderMobileConnection";

export function HeaderBurgerNav() {
    return (
        <div className="bg-black h-1000 pt-8">
            <div className="container-mobile">
                <HeaderMobileConnection />
                <div className="text-mobile-nav">
                    <a href="/">Главная</a>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <a href="/services">Услуги</a>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <a href="/catalog">Каталог</a>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <a href="/portfolio">Портфолио</a>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <a href="/about">О нас</a>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <a href="/contacts">Контакты</a>
                    <FaArrowRightLong className="size-5" />
                </div>

            </div>
        </div>
    )
}