export function ApplicationToLaunch() {
    return (
        <div className="pt-60.5">
            <div className="container">
                <div className="mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Процесс</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <h1 className="text-white text-center text-font-space text-4xl md:text-5xl">
                    От заявки до запуска — 5 шагов
                </h1>
                <div className="mt-20 relative">
                    <div className="hidden md:block absolute top-5 left-0 right-0 border-t border-dashed border-white/20" />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                        <div className="relative flex md:flex-col items-center">
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                                01
                            </div>
                            <div className="mt-3 md:mt-6 text-left md:text-center">
                                <h3 className="text-white text-lg font-semibold">Заявка</h3>
                                <p className="text-white/60 mt-1">Оставьте заявку на сайте</p>
                            </div>
                        </div>
                        <div className="relative flex md:flex-col items-center">
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                                02
                            </div>
                            <div className="mt-3 md:mt-6 text-left md:text-center">
                                <h3 className="text-white text-lg font-semibold">Созвон и ТЗ</h3>
                                <p className="text-white/60 mt-1">Обсуждаем задачу и детали</p>
                            </div>
                        </div>
                        <div className="relative flex md:flex-col items-center">
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                                03
                            </div>
                            <div className="mt-3 md:mt-6 text-left md:text-center">
                                <h3 className="text-white text-lg font-semibold">Прототип / демо</h3>
                                <p className="text-white/60 mt-1">Показываю черновик</p>
                            </div>
                        </div>
                        <div className="relative flex md:flex-col items-center">
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                                04
                            </div>
                            <div className="mt-3 md:mt-6 text-left md:text-center">
                                <h3 className="text-white text-lg font-semibold">Разработка и тесты</h3>
                                <p className="text-white/60 mt-1">Верстаю и проверяю</p>
                            </div>
                        </div>
                        <div className="relative flex md:flex-col items-center">
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                                05
                            </div>
                            <div className="mt-3 md:mt-6 text-left md:text-center">
                                <h3 className="text-white text-lg font-semibold">Деплой и поддержка</h3>
                                <p className="text-white/60 mt-1">Запускаю и сопровождаю</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}