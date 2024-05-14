import { PrismaClient, role } from '@prisma/client';
import { getServerSession } from 'next-auth';
import StudentForm from '@/app/Me/student'
import TutorForm from '@/app/Me/tutor'
import Image from 'next/image';
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

  // Фиктивные данные для оценок
  const ratings = {
    average: 1, // Средняя оценка
    total: 27 // Общее количество оценивших
  };

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

        <main className='relative flex h-screen flex-col items-center justify-star'>

          <div className='w-2/3 h-full z-50 rounded-3xl flex flex-col space-y-6'>
            <Link href="/Me" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>

              <div className='w-3/12 h-full z-50 rounded-3xl'>
                <Image className='z-0'
                  src="/Logo.png"
                  alt="Vercel Logo"
                  width={220}
                  height={220}
                />
              </div>
              <div className='w-8/12 h-full z-50 rounded-3xl'>

                <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                  <p className="text-xl text-background font-bold mr-2"><span className='text-secondary'>Оценка:</span></p>
                  <div className="flex">
                  </div>
                  <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>1</span></p>
                </div>

                <p className='text-lg text-secondary font-bold pb-3'>Баранов Артём Щукин</p>
                <p className='text-base text-background font-bold pb-2'>13 мая, 21:11</p>
                <p className='text-base text-background font-bold pb-2'>Ученик не адекватно себя ведёт, в связи с чем не рекомендую с ним связываться.</p>
              </div>

            </Link>

            <Link href="/Me" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>

              <div className='w-3/12 h-full z-50 rounded-3xl'>
                <Image className='z-0'
                  src="/Logo.png"
                  alt="Vercel Logo"
                  width={220}
                  height={220}
                />
              </div>
              <div className='w-8/12 h-full z-50 rounded-3xl'>

                <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                  <p className="text-xl text-background font-bold mr-2"><span className='text-secondary'>Оценка:</span></p>
                  <div className="flex">
                  </div>
                  <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>4</span></p>
                </div>

                <p className='text-lg text-secondary font-bold pb-3'>Гусев Гурий Геннадиевич</p>
                <p className='text-base text-background font-bold pb-2'>13 мая, 14:23</p>
                <p className='text-base text-background font-bold pb-2'>Хороший ученик, быстро понимает предмет.</p>
              </div>

            </Link>

            <Link href="/Me" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>

              <div className='w-3/12 h-full z-50 rounded-3xl'>
                <Image className='z-0'
                  src="/Logo.png"
                  alt="Vercel Logo"
                  width={220}
                  height={220}
                />
              </div>
              <div className='w-8/12 h-full z-50 rounded-3xl'>

                <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                  <p className="text-xl text-background font-bold mr-2"><span className='text-secondary'>Оценка:</span></p>
                  <div className="flex">
                  </div>
                  <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>4</span></p>
                </div>

                <p className='text-lg text-secondary font-bold pb-3'>Капустин Аркадий Михайлович</p>
                <p className='text-base text-background font-bold pb-2'>12 мая, 18:55</p>
                <p className='text-base text-background font-bold pb-2'>С учеником приятно работать.</p>
              </div>

            </Link>

            <Link href="/Me" className='w-full h-auto z-50 rounded-3xl bg-text flex flex-row justify-between p-5'>

              <div className='w-3/12 h-full z-50 rounded-3xl'>
                <Image className='z-0'
                  src="/Logo.png"
                  alt="Vercel Logo"
                  width={220}
                  height={220}
                />
              </div>
              <div className='w-8/12 h-full z-50 rounded-3xl'>

                <div className="flex items-center ml-96 pb-3 mt-1 absolute">
                  <p className="text-xl text-background font-bold mr-2"><span className='text-secondary'>Оценка:</span></p>
                  <div className="flex">
                  </div>
                  <p className="text-xl text-background font-bold ml-2"><span className='text-yellow'>5</span></p>
                </div>

                <p className='text-lg text-secondary font-bold pb-3'>Муравьёва София Владимировна</p>
                <p className='text-base text-background font-bold pb-2'>12 мая, 09:31</p>
                <p className='text-base text-background font-bold pb-2'>Мне очень понравилось работать с Мишей! Приятный парень и быстро воспринимает новую информацию!</p>
              </div>

            </Link>

          </div>

          <div className='absolute h-full w-full bg-background'></div>

        </main>

      </div>
    </div>

  )

}

