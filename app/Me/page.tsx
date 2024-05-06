'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react';

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
                    <Link href="/" className="text-text font-bold text-lg ml-2">Развитие</Link>

                    <div className="space-x-8">
                        <Link href="/Repcenter" className="text-text">Репетиторам</Link>
                        <Link href="/Repcenter" className="text-text">Обучающимся</Link>
                    </div>

                    <div className="space-x-8">
                        <button onClick={() => signOut()} className="text-text">Выйти</button>
                    </div>

                </div>
            </nav>

            <main className="relative flex h-screen flex-col items-center justify-star">

                <div className='w-2/3 h-4/6 z-50 bg-text rounded-3xl flex flex-col mt-10 p-10'>
                    <div className='w-full h-2/6 z-50 flex flex-col rounded-3xl'>
                        <Image className='-mt-4 -ml-8 absolute z-0'
                            src="/Logo.png"
                            alt="Vercel Logo"
                            width={220}
                            height={220}
                        />
                        <p className='text-3xl text-secondary font-bold pb-3 ml-48'>Хорошев Сергей Сергеевич</p>
                        <p className='text-xl text-background font-bold pb-2 ml-48'>Местоположение: Новокузнецк, Запсиб</p>
                        <p className='text-xl text-background font-bold pb-4 ml-48'>Возвраст: 31 Опыт:без опыта Цена услуги:от 500 руб/45 минут</p>
                        <Link href="/Reg" className="text-black font-bold text-lg bg-primary border-white rounded-3xl py-2 px-6 ml-48 w-36">Связаться</Link>
                    </div>
                    <p className='text-xl text-background font-bold pb-2'>О себе: 5 лет работаю в школе учителем географии, помогу со сдачей экзамена. Также помогу понять сложные темы.</p>
                    <p className='text-xl text-background font-bold pb-2'><p className='text-secondary'>Пол:</p>Мужской</p>
                    <p className='text-xl text-background font-bold pb-2'><p className='text-secondary'>Гражданство:</p> Россия</p>
                    <p className='text-xl text-background font-bold pb-2'><p className='text-secondary'>Предметы:</p> География</p>
                    <p className='text-xl text-background font-bold pb-2'><p className='text-secondary'>Кому:</p> 5-9 классы, Подготовка ЕГЭ/ОГЭ</p>
                </div>


                <div className='absolute h-full w-full bg-background'></div>

            </main>
        </div>
    )
}