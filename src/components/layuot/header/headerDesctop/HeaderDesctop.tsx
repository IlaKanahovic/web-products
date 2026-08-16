'use client'

import { LogoGrowth } from "@/components/ui/logo/LogoGrowth"
import { HeaderDesctopNav } from "./HeaderDesctopNav"
import { HeaderDesctopConnection } from "./HeaderDesctopСonnection"

export function HeaderDesctop() {
    return (
        <div>
            <div className="flex justify-between items-center pt-4 px-4">
                <LogoGrowth />
                <HeaderDesctopNav />
                <HeaderDesctopConnection />
            </div>
            <hr className="mt-4 border-[#c1c1c1]" />
        </div>
    )
}