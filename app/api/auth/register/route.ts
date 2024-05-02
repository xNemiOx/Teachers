import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { login, password, role } = await request.json();
    console.log({ login, password, role });

    const hashedPassword = await hash(password, 10);

    let newUser;
    if (role === 'student') {
      newUser = await prisma.student.create({
        data: {
          login: login,
          password: hashedPassword
        }
      });
    } else if (role === 'tutor') {
      newUser = await prisma.tutor.create({
        data: {
          login: login,
          password: hashedPassword
        }
      });
    } else {
      throw new Error('Invalid role');
    }

    console.log("New user created:", newUser);

  } catch (e) {
    console.error("Error creating user:", e);
    return NextResponse.json({ error: 'An error occurred during user creation' }, { status: 500 });
  }

  return NextResponse.json({ message: 'success' });
}
