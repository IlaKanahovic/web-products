'use client'

import { LogoGrowth } from "@/components/ui/logo/LogoGrowth"
import { HeaderMobileBurger } from "./HeaderMobileBurger"
import { useState } from "react"
import { HeaderSideMenu } from "./HeaderSlideMenu"

export function HeaderMobile() {
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

    return (
        <div className="relative">
            <div className="pt-4 px-4 flex justify-between items-center">
                <LogoGrowth />
                <HeaderMobileBurger openBurger={openBurgerMenu} setOpenBurger={setOpenBurgerMenu} />
            </div>
            <hr className="mt-4 border-[#c1c1c1]" />
            <div
                className={`
                    absolute left-0 right-0 top-full z-10
                    transition-all duration-300 ease-in-out
                    ${openBurgerMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
                `}
            >
                <HeaderSideMenu />
            </div>
        </div>
    )
}