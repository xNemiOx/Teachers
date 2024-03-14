'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

    return (
        <div>
            <nav className="bg-Liteprimary p-4 z-50 w-full h-20 flex">
                <div className="container mx-auto flex justify-between items-center">
                    <Image className='-mt-2 -ml-20 absolute z-0'
                        src="/Logo.png"
                        alt="Vercel Logo"
                        width={96}
                        height={96}
                    />
                    <div className="text-text font-bold text-lg ml-2">Развитие</div>

                    <div className="space-x-8">
                        <a href="#" className="text-text">Репетиторам</a>
                        <a href="#" className="text-text">Обучающимся</a>
                        <a href="#" className="text-text">Предметы</a>
                        <a href="#" className="text-text">Обо мне</a>
                    </div>

                    <div className="space-x-8">
                        <Link href="/Reg" className="text-black font-bold text-xs bg-primary border-white rounded-3xl py-3 px-6">Зарегистрироваться</Link>
                        <Link href="/" className="text-text">Выйти</Link>
                    </div>

                </div>
            </nav>

            <main className="relative flex min-h-screen flex-col items-center justify-star">

                <div className='w-2/3 h-40 z-50 flex items-center flex-col justify-center bg-Liteprimary rounded-3xl mt-10'>

                    <div className="w-full flex justify-center">
                        <div className="text-text grid grid-cols-4 gap-4 w-4/4 z-50">
                            <div className="col-span-1 px-6 space-y-2">
                                <p>Русский язык</p>
                                <p>Английский</p>
                                <p>Химия</p>
                                <p>Биология</p>
                            </div>
                            <div className="col-span-1 px-6 space-y-2">
                                <p>Математика</p>
                                <p>Информатика</p>
                                <p>Литература</p>
                                <p>Шахматы</p>
                            </div>
                            <div className="col-span-1 px-6 space-y-2">
                                <p>Проф. Математика</p>
                                <p>Физика</p>
                                <p>Маркетинг и продвижение</p>
                                <p>Ремонт и строительство</p>
                            </div>
                            <div className="col-span-1 px-6 space-y-2">
                                <p>Вокал</p>
                                <p>Программирование</p>
                                <p>Дизайн</p>
                                <p>Психология</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className='w-2/3 h-auto z-50 justify-between flex rounded-3xl mt-10'>

                    <div className='w-8/12 h-auto z-50 flex flex-col bg-Liteprimary rounded-3xl p-6'>
                        <div className='w-full h-24 z-50 rounded-3xl flex flex-row justify-between'>
                            <Link href="#" className="text-black font-bold text-xs bg-primary border-white rounded-3xl py-3 px-6 h-10">Сортировка</Link>
                            <Link href="#" className="text-black font-bold text-xs bg-primary border-white rounded-3xl py-3 px-6 h-10">Найти</Link>
                        </div>

                        <div className='w-full h-full z-50 rounded-3xl flex flex-col justify-between space-y-6'>
                            <div className='w-full h-64 z-50 rounded-3xl bg-text flex flex-row justify-between'>

                            </div>
                            <div className='w-full h-64 z-50 rounded-3xl bg-text flex flex-row justify-between'>

                            </div>
                            <div className='w-full h-64 z-50 rounded-3xl bg-text flex flex-row justify-between'>

                            </div>
                            <div className='w-full h-64 z-50 rounded-3xl bg-text flex flex-row justify-between'>

                            </div>
                            <div className='w-full h-64 z-50 rounded-3xl bg-text flex flex-row justify-between'>

                            </div>
                            <div className='w-full h-64 z-50 rounded-3xl bg-text flex flex-row justify-between'>

                            </div>
                            <div className='w-full h-64 z-50 rounded-3xl bg-text flex flex-row justify-between'>

                            </div>
                        </div>

                    </div>

                    <div className='w-3/12 h-screen z-50 flex items-center flex-col justify-center bg-Liteprimary rounded-3xl'>

                    </div>

                </div>

                <div className='w-2/3 h-screen z-50 flex items-center flex-col justify-center'>
                    <p className='text-7xl text-text font-bold'>Интернет-ресурс</p>
                    <p className='text-7xl text-text font-bold'>для услуг репетиторства</p>
                </div>

                <div className='absolute h-full w-full bg-background'></div>

                <div className="bg-text z-50 w-full h-[720px] flex justify-center">

                    <div className='w-1/3 z-50 flex items-center flex-col py-40'>
                        <p className='text-5xl text-background font-bold mb-10'>Всё в одном месте:</p>
                        <p className='text-2xl text-background  text-center'>Интернет-ресурс "Развитие" собрал в себе все необходимые функции для репетиторского центра от поиска эксперта и ученика до чатов с ним</p>
                        <a href="#" className="text-text font-bold text-base bg-background  border-white rounded-full py-6 px-10 mt-16">Зарегистрироваться</a>
                    </div>

                </div>

            </main>

            <footer>
                <div className="bg-background z-50 w-full h-screen flex justify-center">

                    <div className='w-3/4 z-50 flex items-center flex-col py-36'>
                        <p className='text-4xl text-text font-bold pb-14'>Каким предметам вас обучат?</p>

                        <div className="w-full flex justify-center pt-5">
                            <div className="text-text grid grid-cols-4 gap-4 w-3/4 z-50">
                                <div className="col-span-1 px-6 space-y-2">
                                    <p className="col-span-1 space-y-2 text-primary text-lg pb-3">Школьная программа</p>
                                    <p>Русский язык</p>
                                    <p>Математика</p>
                                    <p>Английский</p>
                                    <p>Литература</p>
                                    <p>Химия</p>
                                    <p>Биология</p>
                                </div>
                                <div className="col-span-1 px-6 space-y-2">
                                    <p className="col-span-1 space-y-2 text-primary text-lg pb-3">ОГЭ</p>
                                    <p>Русский язык</p>
                                    <p>Математика</p>
                                    <p>Физика</p>
                                    <p>Биология</p>
                                    <p>Информатика</p>
                                    <p>Литература</p>
                                </div>
                                <div className="col-span-1 px-6 space-y-2">
                                    <p className="col-span-1 space-y-2 text-primary text-lg pb-3">ЕГЭ</p>
                                    <p>Русский язык</p>
                                    <p>Математика</p>
                                    <p>Проф. Математика</p>
                                    <p>Физика</p>
                                    <p>Биология</p>
                                    <p>Информатика</p>
                                </div>
                                <div className="col-span-1 px-6 space-y-2">
                                    <p className="col-span-1 space-y-2 text-primary text-lg pb-3">Хобби</p>
                                    <p>Вокал</p>
                                    <p>Программирование</p>
                                    <p>Дизайн</p>
                                    <p>Психология</p>
                                    <p>Ремонт и строительство</p>
                                    <p>Маркетинг и продвижение</p>
                                </div>
                            </div>
                        </div>

                        <p className='text-lg text-text font-bold pb-4 pt-28'>И ещё много других предметов</p>
                        <a href="#" className="text-black font-bold text-base bg-primary border-white rounded-full py-6 px-10 mt-16">Зарегистрироваться</a>

                    </div>

                </div>
            </footer>
        </div>
    )
}