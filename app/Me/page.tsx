import { PrismaClient, role } from '@prisma/client';
import { getServerSession } from 'next-auth';
import StudentForm from '@/app/Me/student'
import TutorForm from '@/app/Me/tutor'
import UserForm from '@/app/Me/user'
import { notFound } from 'next/navigation';
import Link from 'next/link'

const prisma = new PrismaClient();

export default async function Me({ userid }: { userid: string }) {

  const session = await getServerSession();

  const user = await prisma.user.findFirst({
    where: {
      id: session?.user.id
    }
  })

  if (!user) notFound();

  console.log(user.role)

  return (
    <div>
      <div className=''>
        {user.role === 'tutor' && (
          <>
            <TutorForm userid={user.id} />
          </>
        )}
        {user.role === 'student' && (
          <>
            <StudentForm userid={user.id} />
          </>
        )}
      </div>
    </div>

  )

}

