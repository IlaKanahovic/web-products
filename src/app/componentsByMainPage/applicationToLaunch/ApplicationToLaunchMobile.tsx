

export function ApplicationToLaunchMobile() {
    return (
        <div className="pt-10">
            <div className="container">
                <div className="mb-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Процесс</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <h1 className="text-white text-center text-font-space text-3xl">
                    От заявки до запуска — 5 шагов
                </h1>

                <div className="mt-10 flex flex-col gap-6">
                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                            01
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold">Заявка</h3>
                            <p className="text-white/60 mt-1">Оставьте заявку на сайте</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                            02
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold">Созвон и ТЗ</h3>
                            <p className="text-white/60 mt-1">Обсуждаем задачу и детали</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                            03
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold">Прототип / демо</h3>
                            <p className="text-white/60 mt-1">Показываю черновик</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                            04
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold">Разработка и тесты</h3>
                            <p className="text-white/60 mt-1">Верстаю и проверяю</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                            05
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold">Деплой и поддержка</h3>
                            <p className="text-white/60 mt-1">Запускаю и сопровождаю</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}