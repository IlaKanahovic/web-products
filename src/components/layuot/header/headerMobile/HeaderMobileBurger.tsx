import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface Props {
    openBurger: boolean
    setOpenBurger: (value: boolean) => void
}

export function HeaderMobileBurger({ openBurger, setOpenBurger }: Props) {
    return (
        <div
            className="relative w-6 h-6 cursor-pointer"
            onClick={() => setOpenBurger(!openBurger)}
        >
            <div
                className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${openBurger
                        ? 'opacity-0 rotate-90 scale-75'
                        : 'opacity-100 rotate-0 scale-100'
                    }
                `}
            >
                <CiMenuBurger className="w-full h-full" />
            </div>
            <div
                className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${openBurger
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-75'
                    }
                `}
            >
                <IoMdClose className="w-full h-full" />
            </div>
        </div>
    )
}