'use client'

import { VscDeveloperTools } from "react-icons/vsc";
import { SiTextpattern } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi"
import CodeIcon3D from "@/components/ui/3d/CodeIcon3D";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const cardClass = "relative rounded-xl bg-[#111111] border border-white/10 shadow-inner shadow-white/5 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-12 before:bg-white/20 before:rounded-full before:blur-2xl before:pointer-events-none after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:pointer-events-none transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center p-6 min-h-[460px] cursor-pointer"

export function OverviewOfServices() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="mt-81.5 relative rounded-xl bg-black p-px overflow-visible"
        >
            <div className="relative rounded-xl bg-black p-6 container">
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none z-10"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10"></div>
                <div>
                    <div className="w-full h-auto pt-6">
                        <CodeIcon3D />
                    </div>
                    <h1 className="text-white text-center text-font-space text-6xl">Услуги</h1>
                    <h2 className="text-[#a1a4a5] text-font-inter text-center text-xl pt-4">Пять направлений - от быстрого запуска до сложных систем с ИИ</h2>
                    <motion.div
                        className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 pt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                        variants={fadeInVariants}
                    >
                        <div className={cardClass}>
                            <h1 className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] text-center font-semibold h-14 flex items-start justify-center">Готовые сайты</h1>
                            <hr className="w-full border-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mt-8" />
                            <h2 className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] text-left mt-4 flex-1">Коробочные решения с адаптацией под ваши нужды. Запуск за 3-4 дня.</h2>
                            <SiTextpattern className="text-white size-10 max-sm:size-12 mb-4" />
                            <button className="mt-6 px-6 py-2 cursor-pointer rounded-full bg-white/5 border border-white/20 text-white text-sm max-sm:text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] self-center">
                                Подробнее
                            </button>
                        </div>

                        <div className={cardClass}>
                            <h1 className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] text-center font-semibold h-14 flex items-start justify-center">Микросервисы и боты</h1>
                            <hr className="w-full border-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mt-8" />
                            <h2 className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] text-left mt-4 flex-1">Автоматизация рутинных задач: запись, оплата, уведомления, боты и интеграции.</h2>
                            <FaRobot className="text-white size-10 max-sm:size-12 mb-4" />
                            <button className="mt-6 px-6 py-2 cursor-pointer rounded-full bg-white/5 border border-white/20 text-white text-sm max-sm:text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] self-center">
                                Подробнее
                            </button>
                        </div>

                        <div className={cardClass}>
                            <h1 className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] text-center font-semibold h-14 flex items-start justify-center">Разработка под ключ</h1>
                            <hr className="w-full border-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mt-8" />
                            <h2 className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] text-left mt-4 flex-1">Сложные веб-приложения, кастомные интеграции, уникальная логика.</h2>
                            <VscDeveloperTools className="text-white size-10 max-sm:size-12 mb-4" />
                            <button className="mt-6 px-6 py-2 cursor-pointer rounded-full bg-white/5 border border-white/20 text-white text-sm max-sm:text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] self-center">
                                Подробнее
                            </button>
                        </div>

                        <div className={cardClass}>
                            <h1 className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] text-center font-semibold h-14 flex items-start justify-center">SEO-продвижение</h1>
                            <hr className="w-full border-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mt-8" />
                            <h2 className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] text-left mt-4 flex-1">Техническая оптимизация и контент, чтобы вас находили в поиске.</h2>
                            <RiAdvertisementLine className="text-white size-10 max-sm:size-12 mb-4" />
                            <button className="mt-6 px-6 py-2 cursor-pointer rounded-full bg-white/5 border border-white/20 text-white text-sm max-sm:text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] self-center">
                                Подробнее
                            </button>
                        </div>

                        <div className={cardClass}>
                            <h1 className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] text-center font-semibold h-14 flex items-start justify-center">AI-разработка</h1>
                            <hr className="w-full border-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mt-8" />
                            <h2 className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] text-left mt-4 flex-1">Разработка сайта с помощью ИИ и внедрение нейросетей на ваш сайт.</h2>
                            <GiArtificialIntelligence className="text-white size-10 max-sm:size-12 mb-4" />
                            <button className="mt-6 px-6 py-2 cursor-pointer rounded-full bg-white/5 border border-white/20 text-white text-sm max-sm:text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] self-center">
                                Подробнее
                            </button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}