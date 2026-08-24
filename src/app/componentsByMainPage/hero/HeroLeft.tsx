import { IoIosArrowForward } from "react-icons/io";

export function HeroLeft() {
    return (
        <div className="pt-42">
            <div className="relative p-px rounded-2xl bg-linear-to-r from-[#0a126f] via-[#ffb52b] to-[#6502b6] max-w-max cursor-pointer transition-shadow duration-400 hover:shadow-[0_0_15px_rgba(2,252,239,0.35),0_0_30px_rgba(255,181,43,0.25),0_0_45px_rgba(160,43,254,0.15)]">
                <div className="flex items-center justify-around px-3 py-1.25 rounded-2xl bg-[#171716]">
                    <span className="text-btn-hero-offers">Выгодные предложения</span>
                    <IoIosArrowForward className="text-white size-3 mt-0.75 ml-1.5" />
                </div>
            </div>
            <h1 className="text-font-cormorant text-[#f0f0f0] text-[96px] leading-24 mt-8">Сайты для <br /> бизнеса</h1>
            <h2 className="text-font-inter text-[#a1a4a5] text-[18px] mt-4">
                Готовые шаблоны, сервисы под ключ и индивидуальная разработка.
                <br />
                Без магии - только код, который приносит клиентов.
            </h2>
            <div className="pt-8">
                <button className="button-main-styles mr-10">
                    <a href="">Каталог</a>
                </button>
                <button className="text-font-inter text-[#a1a4a5] text-[20px] duration-300 hover:text-white">
                    <a href="">Заказать сайт</a>
                </button>
            </div>
        </div>
    )
}
