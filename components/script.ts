import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const Tutor = await prisma.tutor.create({
    data: {
      login: 'NemiO',
      password: '123',
      name: 'Denis',
      surname: 'Tumanov',
      patronymic: 'Andreevich',
      birth_day: '22.09.2004',
      start_date:'22.09.2020',
    },
  })
  console.log(Tutor)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })