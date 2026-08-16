
type LogoSize = "xs" | "sm" | "md" | "lg" | "xl"

interface LogoGrowthProps {
    size?: LogoSize
    className?: string
    inverted?: boolean
    showText?: boolean
}

const sizeMap: Record<LogoSize, { icon: number; text: string; gap: string }> = {
    xs: { icon: 24, text: "text-sm", gap: "gap-2" },
    sm: { icon: 32, text: "text-base", gap: "gap-2.5" },
    md: { icon: 40, text: "text-lg", gap: "gap-3" },
    lg: { icon: 52, text: "text-2xl", gap: "gap-3.5" },
    xl: { icon: 64, text: "text-3xl", gap: "gap-4" },
}

function LogoWordmark({
    size = "md",
    inverted = false,
}: {
    size?: LogoSize
    inverted?: boolean
}) {
    const { text } = sizeMap[size];
    return (
        <span
            className={`font-bold tracking-tight ${text} ${inverted ? "text-white" : "text-[#1E1B4B]"
                }`}
        >
            <span className="logo-web">Web</span>
            <span className="logo-products">Products</span>
        </span>
    )
}

export function LogoGrowth({
    size = "md",
    className = "",
    inverted = false,
    showText = true,
}: LogoGrowthProps) {
    const { icon, gap } = sizeMap[size];
    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <svg width='28px' height='28px' viewBox="0 0 48 48" fill="none" aria-hidden>
                <rect width="48" height="48" rx="12" fill="url(#growth-bg)" />
                <path
                    d="M12 34 L20 26 L26 30 L36 16"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M30 16 H36 V22"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="16" cy="14" r="6" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                <line x1="16" y1="14" x2="16" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                    <linearGradient id="growth-bg" x1="0" y1="48" x2="48" y2="0">
                        <stop stopColor="#f97316" />
                        <stop offset="1" stopColor="#f97316" />
                    </linearGradient>
                </defs>
            </svg>
            {showText && <LogoWordmark size={size} inverted={inverted} />}
        </div>
    )
}