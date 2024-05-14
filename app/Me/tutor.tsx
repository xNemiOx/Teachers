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
                            <p className='text-3xl text-secondary font-bold pb-3 ml-48'>Имя: </p>
                            <p className='text-xl text-background font-bold pb-2 ml-48'>Местоположение: </p>
                            <p className='text-xl text-background font-bold pb-2 ml-48'>Возраст: </p>
                            <p className='text-xl text-background font-bold pb-12 ml-48'>Пол: </p>

                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Опыт: </span> </p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Цена услуги (45 минут): </span> </p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>О себе: </span> </p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Предметы: </span> </p>
                            <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Кому: </span> </p>


                        </div>
                    </div>

                    <div className='absolute h-full w-full bg-background'></div>
                    <button type="submit">Сохранить</button>
                    <Link href="/Reg" className="text-background font-bold text-base bg-text  border-white rounded-full py-6 px-10 mt-12 z-50">Отзывы  ↓</Link>
                </main>
            </form>
        </div>
    )
}
