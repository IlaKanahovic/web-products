import CatalogIcon3D from "@/components/ui/3d/CatalogIcon3D";

export function TeaserByCatalogMobile() {
    return (
        <div className="pt-10">
            <div className="container">
                <div className="mb-5 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Каталог</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div>
                    <div className=" text-white text-center mt-12">
                        <CatalogIcon3D />
                    </div>
                    <h1 className="text-white text-center text-font-space text-5xl pt-8">
                        Уже готово к запуску
                    </h1>
                    <div className="flex flex-col gap-6 mt-8">
                        <div className="bg-[#111111] border border-white/30 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            <div className="relative h-48">
                                <video
                                    className="w-full h-full object-cover"
                                    src="/video/заглушка.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-white text-font-inter text-2xl font-semibold">
                                    Готовый лендинг для салона красоты
                                </h2>
                                <p className="text-white/80 text-font-inter mt-2">
                                    Готовый лендинг с онлайн-записью, галереей работ и блоком услуг. Адаптивный, быстрый, запуск за 2 дня.
                                </p>
                                <p className="text-white/90 text-font-inter text-xl font-semibold mt-4">
                                    от 12 000 ₽ / 3 дня
                                </p>
                                <div className="flex flex-col gap-3 mt-4">
                                    <button className="px-6 py-2 bg-white text-black rounded-lg font-medium">
                                        Подробнее
                                    </button>
                                    <button className="px-6 py-2 border border-white text-white rounded-lg font-medium">
                                        Заказать
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Вторая карточка */}
                        <div className="bg-[#111111] border border-white/30 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            <div className="relative h-48">
                                <video
                                    className="w-full h-full object-cover"
                                    src="/video/заглушка.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-white text-font-inter text-2xl font-semibold">
                                    Автоуведомления клиентам
                                </h2>
                                <p className="text-white/80 text-font-inter mt-2">
                                    Telegram-бот, который сам напоминает клиентам о записи, подтверждает визит и снижает неявки.
                                </p>
                                <p className="text-white/90 text-font-inter text-xl font-semibold mt-4">
                                    от 5 000 ₽ / мес.
                                </p>
                                <div className="flex flex-col gap-3 mt-4">
                                    <button className="px-6 py-2 bg-white text-black rounded-lg font-medium">
                                        Подробнее
                                    </button>
                                    <button className="px-6 py-2 border border-white text-white rounded-lg font-medium">
                                        Заказать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <button className="button-main-styles"><a href="/catalog">Перейти в каталог</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}