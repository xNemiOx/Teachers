'use client'

import UIinput from './UIinput'
import Link from 'next/link'

export default function Register() {



    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-24 bg-background">

            <div className="flex justify-center relative w-1/4 h-auto z-40">
                <div className="px-9 w-full h-full rounded-md  backdrop-filter backdrop-blur-lg bg-Liteprimary transition duration-300 text-center items-center flex flex-col">
                    <div className="text-black font-sans text-4xl flex flex-row justify-center">
                        <p className='text-text pt-5 pb-8'>Регистрация</p>
                    </div>
                    <div className='pt-5 space-y-8 pb-8'>
                        <UIinput placeholder="Логин" />
                        <UIinput placeholder="Пароль" />
                        <UIinput placeholder="Подтверждение пароля" />
                    </div>
                    <Link href="/Auth" className="text-text bg-primary rounded-3xl w-52 py-3">Зарегистрироваться</Link>
                    <Link href="/Auth" className="text-text text-xs mt-4 pb-6">Уже есть аккаунт?</Link>
                </div>
            </div>

        </main>
    )
}