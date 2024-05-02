'use client'

import Register from '@/components/regForm'
import Link from 'next/link'

export default function Auth() {

    return (
        <div className=''>
            <Link href="/" className="text-text bg-primary rounded-3xl w-40 py-2 absolute h-10 z-50 p-6 mt-6 ml-6"> ← Вернуться</Link>
            <div className=''>
                <Register />
            </div>
        </div>
    )
}
