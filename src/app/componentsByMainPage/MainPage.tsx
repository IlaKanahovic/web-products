'use client'

import LightRays from "@/components/LightRays"
import { HeaderDesktop } from "@/components/layuot/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layuot/headerMobile/HeaderMobile"
import { Hero } from "./hero/Hero"
import { OverviewOfServices } from "./overviewOfServices/OverviewOfServices"
import { TeaserByCatalog } from "./teaserByCatalog/TeaserByCatalog"
import { AboutMyWork } from "./aboutMyWork/AboutMyWork"
import { TeaserByCatalogMobile } from "./teaserByCatalog/TeaserByCatalogMobile"
import { ApplicationToLaunch } from "./applicationToLaunch/ApplicationToLaunch"
import { Portfolio } from "./portfolio/Portfolio"
import { ApplicationToLaunchMobile } from "./applicationToLaunch/ApplicationToLaunchMobile"
import { ContactsMainPage } from "./contactsMainPage/ContactsMainPage"

export function MainPage() {
    return (
        <div className="relative pt-18">
            <div className="desktop-only" style={{ width: '100%', height: '1024px', position: 'absolute', top: '0', left: '0', zIndex: '-1' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={0.8}
                    lightSpread={0.5}
                    rayLength={0.5}
                    pulsating={false}
                    fadeDistance={1}
                    saturation={0.8}
                    followMouse
                    mouseInfluence={0.05}
                    noiseAmount={0.1}
                    distortion={0}
                />
            </div>
            <div className="mobile-only">
                <HeaderMobile />
            </div>
            <div className="desktop-only">
                <HeaderDesktop />
            </div>
            <Hero />
            <OverviewOfServices />
            <AboutMyWork />
            <div className="mobile-only">
                <TeaserByCatalogMobile />
            </div>
            <div className="desktop-only">
                <TeaserByCatalog />
            </div>
            <div className="mobile-only">
                <ApplicationToLaunchMobile />
            </div>
            <div className="desktop-only">
                <ApplicationToLaunch />
            </div>
            <Portfolio />
            <ContactsMainPage />
        </div>
    )
}