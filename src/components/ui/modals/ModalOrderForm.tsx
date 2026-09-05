'use client'

import { useState, useEffect } from 'react'
import { useFormValidation } from '@/hooks/useFormValidation'

interface Props {
    isOpen: boolean
    onClose: () => void
    description: string
    handleService: string
}

export function ModalOrderForm() {
    const services = [
        'Готовые сайты',
        'Микросервисы и боты',
        'Разработка под ключ',
        'SEO-продвижение',
        'AI-разработка',
    ]

    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        )
    }

    const { form, errors, handleChange, validateForm } = useFormValidation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Форма валидна', { ...form, selectedServices })
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
        document.body.style.top = `-${window.scrollY}px`

        return () => {
            const scrollY = document.body.style.top
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.width = ''
            document.body.style.top = ''
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

    return (
        <div className="fixed inset-0 z-9999 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="relative w-full max-w-2xl mt-auto sm:mt-0 mb-0 sm:mb-4 rounded-t-2xl sm:rounded-xl bg-[#111111] border border-white/10 shadow-inner shadow-white/5 p-5 sm:p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[95vh] sm:max-h-[90vh] [&::-webkit-scrollbar]:hidden scrollbar-hide">
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4 sm:hidden"></div>

                <form className="w-full" onSubmit={handleSubmit}>
                    <h1 className="text-white text-font-space text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                        Оставьте заявку
                    </h1>
                    <p className="text-white/70 text-font-inter text-center text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 px-2">
                        Мы свяжемся с вами, ответим на интересующие вопросы и подготовим коммерческое предложение.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mt-5 sm:mt-6 md:mt-8">
                        <div>
                            <label className="text-white/80 text-font-inter text-xs sm:text-sm font-medium block mb-1">ФИО</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'
                                    }`}
                                placeholder="Иван Иванов"
                            />
                            {errors.name && (
                                <p className="text-red-400 text-[10px] sm:text-xs mt-1">{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <label className="text-white/80 text-font-inter text-xs sm:text-sm font-medium block mb-1">Телефон</label>
                            <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'
                                    }`}
                                placeholder="+7 900 000-00-00"
                            />
                            {errors.phone && (
                                <p className="text-red-400 text-[10px] sm:text-xs mt-1">{errors.phone}</p>
                            )}
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-white/80 text-font-inter text-xs sm:text-sm font-medium block mb-1">E-mail</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'
                                    }`}
                                placeholder="example@mail.ru"
                            />
                            {errors.email && (
                                <p className="text-red-400 text-[10px] sm:text-xs mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-white/80 text-font-inter text-xs sm:text-sm font-medium block mb-1">
                                Сфера бизнеса, регион работы, адрес действующего сайта и витрины
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Например: интернет-магазин, Москва, site.ru"
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-y"
                            />
                        </div>
                    </div>

                    <div className="mt-5 sm:mt-6 md:mt-8">
                        <span className="text-white/80 text-font-inter text-xs sm:text-sm font-medium block mb-2 sm:mb-3">
                            Интересующие направления
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                            {services.map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => toggleService(service)}
                                    className={`px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full border text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${selectedServices.includes(service)
                                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                        : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-white/40'
                                        }`}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 sm:mt-6 md:mt-8 space-y-2 sm:space-y-3">
                        <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={form.consent}
                                onChange={(e) => handleChange('consent', e.target.checked)}
                                className="mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer shrink-0"
                            />
                            <span className="text-white/70 text-font-inter text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                                Я даю согласие на обработку персональных данных на условиях{' '}
                                <a href="/personal-data-processing-policy" className="text-white/90 hover:text-white underline underline-offset-2">
                                    Политики обработки персональных данных
                                </a>
                                .
                            </span>
                        </label>
                        {errors.consent && (
                            <p className="text-red-400 text-[10px] sm:text-xs mt-1">{errors.consent}</p>
                        )}

                        <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer shrink-0"
                            />
                            <span className="text-white/70 text-font-inter text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                                Я даю
                                <a href="/consent-receive-advertising" className="text-white/90 hover:text-white underline underline-offset-2"> согласие </a>
                                получать рекламные и информационные материалы.
                            </span>
                        </label>
                    </div>

                    <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
                        <button
                            type="submit"
                            className="relative px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 bg-white text-black rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer group text-sm sm:text-base w-full sm:w-auto"
                        >
                            <span className="relative z-10">Оставить заявку</span>
                            <span className="absolute inset-0 bg-linear-to-r from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}