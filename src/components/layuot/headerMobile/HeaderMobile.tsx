'use client'

import { BrandIdentityLogo } from "@/components/ui/logo/BrandIdentityLogo"
import { useEffect, useState } from "react"
import { HeaderBurgerMenu } from "./HeaderBurgerMenu"
import { HeaderBurgerNav } from "./HeaderBurgerNav"


export function HeaderMobile() {
    const [scrolled, setScrolled] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 30
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrolled])

    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-1000 pt-3 pb-3
        transition-all duration-300 ease-in-out
        ${scrolled
                    ? 'bg-black/30 backdrop-blur-lg border-b border-white/5'
                    : 'bg-transparent backdrop-blur-none border-transparent'
                }
        `}
        >
            <div className="container-mobile flex justify-between items-center">
                <BrandIdentityLogo />
                <HeaderBurgerMenu openMenu={openMenu} setOpenMenu={() => setOpenMenu(!openMenu)} />
            </div>
            {openMenu ? <HeaderBurgerNav /> : <div></div>}
        </header>
    )
}