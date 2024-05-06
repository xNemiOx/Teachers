// pages/api/auth.ts

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient} from '@prisma/client';
import { compare } from 'bcrypt';

const prisma = new PrismaClient();

async function checkPassword(email: string, password: string) {
    try {
        // Получаем данные пользователя из базы данных
        const tutor = await prisma.tutor.findUnique({
            where: {
                login: email,
            },
        });

        // Проверяем, существует ли пользователь с таким логином
        if (!tutor) {
            console.error('Пользователь не найден');
            return null;
        }

        // Хешируем введенный пользователем пароль и сравниваем с хешем из базы данных
        const passwordMatches = await compare(password, tutor.password);

        if (passwordMatches) {
            // Если пароль совпадает, возвращаем пользователя
            return tutor;
        } else {
            // Если пароль не совпадает, возвращаем null
            console.error('Неверный пароль');
            return null;
        }
    } catch (error) {
        console.error('Error while checking password:', error);
        // Возвращаем общее сообщение об ошибке
        return null;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                login: { type: 'email' },
                password: { type: 'password' },
            },
    
            async authorize(credentials): Promise<any> {
                const { email, password } = credentials as any
                const tutor = await checkPassword(email, password);
                if (tutor) {
                    const { password, ...res } = tutor
                    console.log(tutor)
                    return res
                }
                return null
            },
        }),



    ],

    session:{strategy:
        'jwt'
    },

    adapter: PrismaAdapter(prisma as any),

    // Измененный маршрут на /api/auth
    callbacks: {
        async session({ session, token }) {
            // Проверяем, что сессия существует и содержит пользователя
            if (session && session.user) {
                console.log('Current session:', session);
                // Возвращаем текущий объект сессии
                return session;
            } else {
                // Если сессия или пользователь не найдены, возвращаем null
                return session;
            }
        },
    },

};

export default NextAuth(authOptions);
