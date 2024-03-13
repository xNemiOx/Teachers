'use client'

import UIinput from './UIinput'
import Link from 'next/link'

export default function Authentific() {



    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-24 bg-background">

            <div className="flex justify-center relative w-1/4 h-96 z-40">
                <div className="px-9 w-full h-full rounded-md  backdrop-filter backdrop-blur-lg bg-Liteprimary transition duration-300 text-center items-center flex flex-col">
                    <div className="text-black font-sans text-4xl flex flex-row justify-center">
                        <p className='text-text pt-5 pb-8'>Вход</p>
                    </div>
                    <div className='pt-5 space-y-8 pb-8'>
                        <UIinput placeholder="Логин" />
                        <UIinput placeholder="Пароль" />
                    </div>
                    <button className="text-text bg-primary rounded-3xl w-32 py-2">Войти</button>
                    <Link href="#" className="text-text text-xs mt-4">Ещё нет аккаунта?</Link>
                </div>
            </div>

        </main>
    )
}