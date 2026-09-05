import Link from "next/link";


export function HeaderMobileConnection() {
    return (
        <div>
            <Link href="/contacts">
                <button className="button-mobile-styles">
                    Обсудить вашу проблему
                </button>
            </Link>
        </div>
    )
}