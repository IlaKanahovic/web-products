import { FaArrowRightLong } from "react-icons/fa6";
import { HeaderMobileConnection } from "./HeaderMobileConnection";

export function HeaderBurgerNav() {
    return (
        <div className="bg-black h-1000 pt-8">
            <div className="container-mobile">
                <HeaderMobileConnection />
                <div className="text-mobile-nav">
                    <span>Главная</span>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <span>Услуги</span>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <span>Каталог</span>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <span>Портфолио</span>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <span>О нас</span>
                    <FaArrowRightLong className="size-5" />
                </div>
                <hr className="border border-[#111111]" />
                <div className="text-mobile-nav">
                    <span>Контакты</span>
                    <FaArrowRightLong className="size-5" />
                </div>
            </div>
        </div>
    )
}