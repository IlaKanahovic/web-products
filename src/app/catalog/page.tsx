import { HeaderDesktop } from "@/components/layuot/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layuot/headerMobile/HeaderMobile";
import LightRays from "@/components/LightRays";


export default function Catalog() {

    return (
        <div>
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
            </div>
        </div>
    )
}
