
type BrandIdentityLogoProps = {
    iconSize?: number
    textSize?: string
    subtitle?: string
    className?: string
}
export function BrandIdentityLogo({
    iconSize = 32,
    textSize = "text-2xl",
    className = "",
}: BrandIdentityLogoProps) {
    return (
        <div>
            <div className="flex">
                <svg
                    width={iconSize}
                    height={iconSize}
                    viewBox="0 0 32 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                    aria-hidden="true"
                >
                    <path
                        d="M3 32V8L9 22L18 4L27 22L33 8V32H28V13L18 30L8 13V32H3Z"
                        fill="#FAFAFA"
                    />
                </svg>
                <span
                    className={`font-bold tracking-tight text-[#ffffff] ${textSize} mt-0.75 logo-web`}
                >
                    eb
                </span>
                <span
                    className={`font-bold tracking-tight text-[#d7d7d7] ${textSize} mt-0.75 logo-web`}
                >
                    CRitic
                </span>
            </div>
        </div>
    )
}