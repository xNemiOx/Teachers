import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkPassword(username: string, password: string): Promise<boolean> {
    try {
        return true;
    } catch (error) {
        console.error('Error while checking password:', error);
        return false;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            id: "domain-login",
            name: "Domain Account",
            async authorize(credentials, req) {
                if (!credentials?.login || !credentials?.password) return null;

                try {
                    // Проверяем правильность пароля и логина
                    const passwordMatches = await checkPassword(credentials.login, credentials.password);

                    if (passwordMatches) {
                        // Если пароль совпадает, возвращаем пользователя
                        return {
                            id: 'user_id', // Замените на реальный идентификатор пользователя
                            username: credentials.login,
                            // Здесь можете добавить другие данные пользователя, если необходимо
                        };
                    } else {
                        // Если пароль не совпадает, возвращаем null
                        return null;
                    }
                } catch (error) {
                    console.error('Error while authorizing:', error);
                    return null;
                }
            },
            credentials: {
                login: { label: "Login", type: "text", required: true },
                password: { label: "Password", type: "password", required: true },
            },
        }),
    ],

    adapter: PrismaAdapter(prisma as any),
}

export default NextAuth(authOptions)