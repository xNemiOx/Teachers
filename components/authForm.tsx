import { useState } from 'react';
import Link from 'next/link';
import UIinput from './UIinput';

export default function Authentific() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('@prisma/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login, password })
            });

            if (response.ok) {
                // Если аутентификация прошла успешно, перенаправляем пользователя на защищенную страницу
                window.location.href = '/dashboard'; // Замените на URL вашей защищенной страницы
            } else {
                const data = await response.json();
                setError(data.error || 'Ошибка аутентификации');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setError('Произошла ошибка при выполнении запроса');
        }
    };

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-24 bg-background">
            <div className="flex justify-center relative w-1/4 h-96 z-40">
                <div className="px-9 w-full h-full rounded-md  backdrop-filter backdrop-blur-lg bg-Liteprimary transition duration-300 text-center items-center flex flex-col">
                    <div className="text-black font-sans text-4xl flex flex-row justify-center">
                        <p className='text-text pt-5 pb-8'>Вход</p>
                    </div>
                    <div className='pt-5 space-y-8 pb-8'>
                        <UIinput placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
                        <UIinput placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleLogin} className="text-text bg-primary rounded-3xl w-32 py-2">Войти</button>
                    {error && <p className="text-text text-sm mt-2">{error}</p>}
                    <Link href="/Reg" className="text-text text-xs mt-4">Ещё нет аккаунта?</Link>
                </div>
            </div>
        </main>
    );
}
