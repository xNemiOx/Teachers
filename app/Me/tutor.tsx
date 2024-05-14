import Image from 'next/image';
import Link from 'next/link';
import { getSession, signOut } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

const prisma = new PrismaClient();

export default async function TutorForm({ userid }: { userid: string }) {

    const session = await getServerSession();

    const user = await prisma.user.findFirst({
        where: {
            id: session?.user.id
        }
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    };

    // Фиктивные данные для оценок
    const ratings = {
        average: 3.5, // Средняя оценка
        total: 4 // Общее количество оценивших
    };

    return (
        <div>
            <form>
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
                            <button className="text-text">Выйти</button>
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
                            <p className='text-3xl text-secondary font-bold pb-3 ml-48'>Имя: Хорошев Сергей Сергеевич</p>
                            <p className='text-xl text-background font-bold pb-2 ml-48'>Местоположение: Новокузнецк, Заводской р-н</p>
                            <p className='text-xl text-background font-bold pb-2 ml-48'>Возраст: 31</p>
                            <p className='text-xl text-background font-bold pb-12 ml-48'>Пол: мужской</p>

                            <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                                <p className="text-xl text-background font-bold mr-2 ml-96"><span className='text-secondary'>Оценка:</span></p>
                                <div className="flex">
                                </div>
                                <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>{ratings.average.toFixed(1)}</span> ({ratings.total} оценок)</p>
                            </div>

                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Опыт: </span>31</p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Цена услуги (45 минут): </span>500 руб </p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>О себе: </span> 5 лет работаю в школе учителем географии, помогу со сдачей экзамена. Также помогу понять сложные темы.</p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Предметы: </span> Русский, литература</p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Кому: </span> 1-4 класс</p>
                        </div>
                    </div>

                    <div className='absolute h-full w-full bg-background'></div>
                    <button type="submit">Сохранить</button>
                    <Link href="/Reg" className="text-background font-bold text-base bg-text border-white rounded-full py-6 px-10 mt-12 z-50 mb-48">Отзывы  ↓</Link>

                </main>

            </form>
        </div>
    )
}
