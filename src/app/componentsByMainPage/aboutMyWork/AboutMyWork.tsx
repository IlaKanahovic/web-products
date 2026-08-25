import { FiFileText, FiZap, FiEye, FiUser } from 'react-icons/fi';

export function AboutMyWork() {
    return (
        <div className="pt-10 md:pt-60.5">
            <div className="container">
                <div className="mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Принципы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <h1 className="text-white text-center text-font-space text-4xl md:text-5xl">
                    Никакой магии, только код
                </h1>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-white/10">
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiFileText className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <h2 className="text-white text-font-inter text-lg font-semibold">Официально</h2>
                        </div>
                        <p className="text-white/70 text-font-inter">Договор, чеки, официальное оформление.</p>
                    </div>
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiZap className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <h2 className="text-white text-font-inter text-lg font-semibold">Быстро</h2>
                        </div>
                        <p className="text-white/70 text-font-inter">Шаблон за пару дней, сайт под ключ за 3 недели.</p>
                    </div>
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiEye className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <h2 className="text-white text-font-inter text-lg font-semibold">Прозрачно</h2>
                        </div>
                        <p className="text-white/70 text-font-inter">Фиксированная цена, без доплат за воздух.</p>
                    </div>
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiUser className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <h2 className="text-white text-font-inter text-lg font-semibold">Персонально</h2>
                        </div>
                        <p className="text-white/70 text-font-inter">Индивидуальное общение с клиентом.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}