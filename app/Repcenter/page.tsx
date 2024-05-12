'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {

    const session = useSession();
    if (!session?.data) {
        redirect('/');
    }

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
                    <Link href="/" className="text-text font-bold text-lg ml-2">Развитие</Link>

                    <div className="space-x-8">
                        <Link href="#" className="text-text">Репетиторам</Link>
                        <Link href="#" className="text-text">Обучающимся</Link>
                        <Link href="/Me" className="text-text">Обо мне</Link>
                    </div>

                    <div className="space-x-8">
                        <Link onClick={() => {signOut();}} href="/" className="text-text">Выйти</Link>
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

                            <Link href="/Me" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>
                                <div className='w-3/12 h-full z-50 rounded-3xl'>
                                    <Image className='z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                </div>
                                <div className='w-8/12 h-full z-50 rounded-3xl'>
                                    <p className='text-lg text-secondary font-bold pb-3'>Хорошев Сергей Сергеевич</p>
                                    <p className='text-base text-background font-bold pb-2'>Местоположение: Новокузнецк, Запсиб</p>
                                    <p className='text-base text-background font-bold pb-2'>Возвраст: 31 Опыт:без опыта Цена услуги:от 500 руб/45 минут</p>
                                    <p className='text-base text-background font-bold pb-2'>О себе: 5 лет работаю в школе учителем географии, помогу со сдачей экзамена. Также помогу понять сложные темы.</p>
                                </div>
                            </Link>

                            <Link href="/" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>
                                <div className='w-3/12 h-full z-50 rounded-3xl'>
                                    <Image className='z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                </div>
                                <div className='w-8/12 h-full z-50 rounded-3xl'>
                                    <p className='text-lg text-secondary font-bold pb-3'>Сычко Давид Никитович</p>
                                    <p className='text-base text-background font-bold pb-2'>Местоположение: Новокузнецк, Запсиб</p>
                                    <p className='text-base text-background font-bold pb-2'>Возвраст: 31 Опыт: 9 лет Цена услуги:от 700 руб/45 минут</p>
                                    <p className='text-base text-background font-bold pb-2'>О себе: Подробно все объясню на русском, отвечу на все вопросы. Обучение станет легким и приятным. Работал в общеобразовательной школе. В дальнейшем перешел в частное образовательное учреждение, что позволило разработать собственные методики преподавания, и в полной мере реализовать творческий потенциал. Во время обучения никогда не бегу вперед, материал будет прорабатываться до тех пор, пока учащийся максимально не усвоит его. Все упражнения беру не из интернета и учебников, а составляю сам, на основании уровня знаний и возможностей учащегося. Стараюсь максимально подробно отметить на любые вопросы, не буду грузить вас сложной терминологией. Особый упор делаю на грамматику и правильность составления предложений. Для занятий не нужны никакие дорогостоящие учебники, необходимы только ручка и бумага. Общий опыт работы в обучении иностранным языкам — около 9-ти лет.</p>
                                </div>
                            </Link>

                            <Link href="/" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>
                                <div className='w-3/12 h-full z-50 rounded-3xl'>
                                    <Image className='z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                </div>
                                <div className='w-8/12 h-full z-50 rounded-3xl'>
                                    <p className='text-lg text-secondary font-bold pb-3'>Хорошев Сергей Сергеевич</p>
                                    <p className='text-base text-background font-bold pb-2'>Местоположение: Новокузнецк, Запсиб</p>
                                    <p className='text-base text-background font-bold pb-2'>Возвраст: 31 Опыт:без опыта Цена услуги:от 500 руб/45 минут</p>
                                    <p className='text-base text-background font-bold pb-2'>О себе: 5 лет работаю в школе учителем географии, помогу со сдачей экзамена. Также помогу понять сложные темы.</p>
                                </div>
                            </Link>

                            <Link href="/" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>
                                <div className='w-3/12 h-full z-50 rounded-3xl'>
                                    <Image className='z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                </div>
                                <div className='w-8/12 h-full z-50 rounded-3xl'>
                                    <p className='text-lg text-secondary font-bold pb-3'>Хорошев Сергей Сергеевич</p>
                                    <p className='text-base text-background font-bold pb-2'>Местоположение: Новокузнецк, Запсиб</p>
                                    <p className='text-base text-background font-bold pb-2'>Возвраст: 31 Опыт:без опыта Цена услуги:от 500 руб/45 минут</p>
                                    <p className='text-base text-background font-bold pb-2'>О себе: 5 лет работаю в школе учителем географии, помогу со сдачей экзамена. Также помогу понять сложные темы.</p>
                                </div>
                            </Link>

                            <Link href="/" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>
                                <div className='w-3/12 h-full z-50 rounded-3xl'>
                                    <Image className='z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                </div>
                                <div className='w-8/12 h-full z-50 rounded-3xl'>
                                    <p className='text-lg text-secondary font-bold pb-3'>Хорошев Сергей Сергеевич</p>
                                    <p className='text-base text-background font-bold pb-2'>Местоположение: Новокузнецк, Запсиб</p>
                                    <p className='text-base text-background font-bold pb-2'>Возвраст: 31 Опыт:без опыта Цена услуги:от 500 руб/45 минут</p>
                                    <p className='text-base text-background font-bold pb-2'>О себе: 5 лет работаю в школе учителем географии, помогу со сдачей экзамена. Также помогу понять сложные темы.</p>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className='w-3/12 h-1/2 flex flex-col bg-Liteprimary rounded-3xl p-5'>
                        <label className=" mb-2 text-lg font-bold text-text">Город</label>
                        <select className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-Liteprimary">
                            <option>Москва</option>
                            <option>Санкт-Петербург</option>
                            <option>Новокузнецк</option>
                            <option>Новосибирск</option>
                            <option>Калтан</option>
                            <option>Томск</option>
                        </select>
                        <label className=" mb-2 text-lg font-bold text-text">Предмет</label>
                        <select className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-Liteprimary">
                            <option>Русский язык</option>
                            <option>Математика</option>
                            <option>Информатика</option>
                            <option>Английский язык</option>
                            <option>Литература</option>
                            <option>Химия</option>
                            <option>Биология</option>
                            <option>Шахматы</option>
                            <option>Проф. Математика</option>
                            <option>Физика</option>
                            <option>Вокал</option>
                            <option>Программирование</option>
                            <option>Маркетинг и продвижение</option>
                            <option>Ремонт и строительство</option>
                            <option>Дизайн</option>
                            <option>Психология</option>
                        </select>
                        <label className=" mb-2 text-lg font-bold text-text">Для кого</label>
                        <select className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-Liteprimary">
                            <option>Дошкольники</option>
                            <option>1-4 классы</option>
                            <option>5-9 классы</option>
                            <option>10-11 классы</option>
                            <option>Подготовка к ОГЭ</option>
                            <option>Подготовка к ЕГЭ</option>
                            <option>Студенты и взрослые</option>
                        </select>
                        <label className="mt-6 mb-2 text-lg font-bold text-text">Зарплата за 45 минут</label>
                        <label className=" mb-2 text-lg font-bold text-text">От</label>
                        <select className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-Liteprimary">
                            <option>100</option>
                            <option>200</option>
                            <option>300</option>
                            <option>400</option>
                            <option>500</option>
                            <option>600</option>
                            <option>700</option>
                            <option>800</option>
                            <option>900</option>
                            <option>1000</option>
                        </select>
                        <label className=" mb-2 text-lg font-bold text-text">До</label>
                        <select className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-Liteprimary">
                            <option>100</option>
                            <option>200</option>
                            <option>300</option>
                            <option>400</option>
                            <option>500</option>
                            <option>600</option>
                            <option>700</option>
                            <option>800</option>
                            <option>900</option>
                            <option>1000</option>
                        </select>
                        <label className="mt-6 mb-2 text-lg font-bold text-text">Возраст</label>
                        <label className=" mb-2 text-lg font-bold text-text">От</label>
                        <select className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-Liteprimary">
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                            <option>35</option>
                            <option>40</option>
                            <option>45</option>
                            <option>50</option>
                            <option>55</option>
                            <option>60</option>
                            <option>65</option>
                            <option>70</option>
                            <option>75</option>
                        </select>
                        <label className=" mb-2 text-lg font-bold text-text">До</label>
                        <select className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-Liteprimary">
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                            <option>35</option>
                            <option>40</option>
                            <option>45</option>
                            <option>50</option>
                            <option>55</option>
                            <option>60</option>
                            <option>65</option>
                            <option>70</option>
                            <option>75</option>
                        </select>
                    </div>

                </div>

                <div className='absolute h-full w-full bg-background'></div>

            </main>

        </div>
    )
}