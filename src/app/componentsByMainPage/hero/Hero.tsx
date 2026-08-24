'use client'

import { HeroLeft } from "./HeroLeft"
import { HeroRight } from "./HeroRight"

export function Hero() {
    return (
        <div className="container flex items-center gap-100">
            <HeroLeft />
            <div className="hero-desktop-only">
                <HeroRight />
            </div>
        </div>
    )
}