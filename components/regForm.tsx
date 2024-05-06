'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [role, setRole] = useState('student'); // Установите начальное значение роли на "ученик"
    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [correctPassword, setCorrectPassword] = useState('');
    const [error, setError] = useState('');

    const router=useRouter()

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        if (password !== correctPassword) {
            setError('Пароли не совпадают');
            return;
        }
    
        try {
            const response = await fetch(`/api/auth/register`, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    role: role // Передаем значение роли
                }),
            });
        
            console.log('Status:', response.status);
        
            if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                setError('Неверный формат адреса электронной почты');
            }
            else if (response?.ok) {
                router.push('/Auth');
            } else {
                const data = await response.json();
                console.error('Ошибка:', data);
                setError('Такой пользователь уже существует');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            setError('Произошла ошибка при регистрации');
        }

    }
    
    

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-24 bg-background">
            <div className="flex justify-center relative w-full max-w-sm">
                <div className="px-9 w-full h-auto rounded-md backdrop-filter backdrop-blur-lg bg-Liteprimary transition duration-300 text-center items-center flex flex-col">
                    <div className="text-black font-sans text-4xl flex flex-row justify-center">
                        <p className="text-text pt-5 pb-8">Регистрация</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="pt-5 space-y-8 pb-8">
                            <input name='email' placeholder='Электронная почта' value={email} onChange={(e) => setLogin(e.target.value)} className='text-background py-3 px-2 font-semibold rounded-md h-14 transition bg-text z-10 placeholder:text-background'></input>
                            <input name='password' type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} className='text-background py-3 px-2 font-semibold rounded-md h-14 transition bg-text z-10 placeholder:text-background'></input>
                            <input name='correctPassword' type='password' placeholder='Подтверждение пароля' value={correctPassword} onChange={(e) => setCorrectPassword(e.target.value)} className='text-background py-3 px-2 font-semibold rounded-md h-14 transition bg-text z-10 placeholder:text-background'></input>
                            <div className="flex justify-between w-72 pl-8">
                                <div className="flex justify-center relative">
                                    <input
                                        type="radio"
                                        value="student"
                                        name="role"
                                        checked={role === 'student'}
                                        onChange={() => setRole('student')} // Устанавливаем роль ученика
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я ученик</label>
                                </div>
                                <div className="flex justify-center relative">
                                    <input
                                        type="radio"
                                        value="tutor"
                                        name="role"
                                        checked={role === 'tutor'}
                                        onChange={() => setRole('tutor')} // Устанавливаем роль репетитора
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я репетитор</label>
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-red-500">{error}</p>} {/* Отображаем сообщение об ошибке */}
                        <button type="submit" className="text-text bg-primary rounded-3xl w-52 py-3">
                            Зарегистрироваться
                        </button>
                    </form>
                    <Link href="/Auth" className="text-text text-xs mt-4 pb-6">
                        Уже есть аккаунт?
                    </Link>
                </div>
            </div>
        </main>
    );
}
