'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TutorForm() {

    const [isAdded, setIsAdded] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [blockIndex, setBlockIndex] = useState(0);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsAdded(!isAdded);
        setBlockIndex((blockIndex + 1) % 3);
    };

    const handleButtonClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsAdd(!isAdd);
    };


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
                            <button className="text-text font-bold text-base bg-background  border-white rounded-full py-6 px-10 mt-[488px] w-52 absolute" onClick={handleButtonClick}>{isAdded ? 'Сохранить' : 'Редактировать'}</button>



                            {blockIndex === 0 && (
                                <div className='w-8/12 h-2/6 z-50 flex flex-col rounded-3xl absolute'>
                                    <Image className='-mt-4 -ml-8 absolute z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                    <p className='text-3xl text-secondary font-bold pb-3 ml-48'>Имя:</p>
                                    <p className='text-xl text-background font-bold pb-2 ml-48'>Местоположение:</p>
                                    <p className='text-xl text-background font-bold pb-2 ml-48'>Возраст:</p>
                                    <p className='text-xl text-background font-bold pb-12 ml-48'>Пол:</p>

                                    <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                                        <p className="text-xl text-background font-bold mr-2 ml-96"><span className='text-secondary'>Оценка:</span></p>
                                        <div className="flex">
                                        </div>
                                        <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>0</span> (0 оценок)</p>
                                    </div>

                                    <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Необходимые предметы: </span></p>
                                    <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Профессиональное положение: </span></p>
                                    <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>О себе: </span></p>
                                </div>
                            )}

                            {blockIndex === 1 && (
                                <div className='w-8/12 h-2/6 z-50 flex flex-col rounded-3xl absolute'>
                                    <Image className='-mt-4 -ml-8 absolute z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                    <input name='password' placeholder='Имя: ' className='w-9/12 text-background py-3 px-2 font-bold rounded-md h-14 transition bg-text z-10 placeholder:text-gray-500 text-3xl pb-3 ml-44 border border-black border-2 mb-2'></input>
                                    <input name='password' placeholder='Местоположение: ' className='w-9/12 text-background py-3 px-2 font-bold rounded-md h-14 transition bg-text z-10 placeholder:text-gray-500 text-xl pb-3 ml-44 border border-black border-2 mb-2'></input>
                                    <input name='password' placeholder='Возраст: ' className='w-9/12 text-background py-3 px-2 font-bold rounded-md h-14 transition bg-text z-10 placeholder:text-gray-500 text-xl pb-3 ml-44 border border-black border-2 mb-2'></input>
                                    <input name='password' placeholder='Пол: ' className='w-9/12 text-background py-3 px-2 font-bold rounded-md h-14 transition bg-text z-10 placeholder:text-gray-500 text-xl pb-3 ml-44 border border-black border-2 mb-2'></input>

                                    <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                                        <p className="text-xl text-background font-bold mr-2 ml-96"><span className='text-secondary'>Оценка:</span></p>
                                        <div className="flex">
                                        </div>
                                        <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>0</span> (0 оценок)</p>
                                    </div>


                                    <input name='password' placeholder='Необходимые предметы: ' className='w-9/12 text-background py-3 px-2 font-bold rounded-md h-14 transition bg-text z-10 placeholder:text-gray-500 text-xl pb-3 ml-44 border border-black border-2 mb-2'></input>
                                    <input name='password' placeholder='Профессиональное положение: ' className='w-9/12 text-background py-3 px-2 font-bold rounded-md h-14 transition bg-text z-10 placeholder:text-gray-500 text-xl pb-3 ml-44 border border-black border-2 mb-2'></input>
                                    <input name='password' placeholder='О себе: ' className='w-9/12 text-background py-3 px-2 font-bold rounded-md h-14 transition bg-text z-10 placeholder:text-gray-500 text-xl pb-3 ml-44 border border-black border-2'></input>
                                </div>
                            )}

                            {blockIndex === 2 && (
                                <div className='w-8/12 h-2/6 z-50 flex flex-col rounded-3xl absolute'>
                                    <Image className='-mt-4 -ml-8 absolute z-0'
                                        src="/Logo.png"
                                        alt="Vercel Logo"
                                        width={220}
                                        height={220}
                                    />
                                    <p className='text-3xl text-secondary font-bold pb-3 ml-48'>Имя: Туманов Денис Андреевич</p>
                                    <p className='text-xl text-background font-bold pb-2 ml-48'>Местоположение: Новокузнецк, д. Шорохово</p>
                                    <p className='text-xl text-background font-bold pb-2 ml-48'>Возраст: 19</p>
                                    <p className='text-xl text-background font-bold pb-12 ml-48'>Пол: мужской</p>

                                    <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                                        <p className="text-xl text-background font-bold mr-2 ml-96"><span className='text-secondary'>Оценка:</span></p>
                                        <div className="flex">
                                        </div>
                                        <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>0</span> (0 оценок)</p>
                                    </div>

                                    <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Необходимые предметы: </span> Китайский</p>
                                    <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>Профессиональное положение: </span> Студент</p>
                                    <p className='text-xl text-background font-bold pb-3'><span className='text-secondary'>О себе: </span> Хочу выучить китайский для путешествий</p>
                                </div>
                            )}




                            <button className="text-text font-bold text-base bg-background  border-white rounded-full py-6 px-10 ml-[970px] mt-[488px] w-56 absolute" onClick={handleButtonClick2}>{isAdd ? 'Удалить из сайта' : 'Добавить на сайт'}</button>
                        </div>
                    </div>

                    <div className='absolute h-full w-full bg-background'></div>
                    <Link href="/Reg" className="text-background font-bold text-base bg-text border-white rounded-full py-6 px-10 mt-12 z-50 mb-48">Отзывы  ↓</Link>

                </main>

            </form>
        </div>
    )
}
