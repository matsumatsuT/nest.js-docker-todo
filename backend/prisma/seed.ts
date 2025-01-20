import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ユーザーの作成
  await prisma.user.createMany({
    data: [
      {
        email: 'test1@test.com',
        password: 'password',
        name: 'テストユーザー1',
      },
      {
        email: 'aaa@test.com',
        password: 'password',
        name: 'あああ君',
      },
      {
        email: 'power@test.com',
        password: 'password',
        name: '力持ち',
      },
    ],
  })

  // todoの作成
  await prisma.todo.createMany({
    data: [
      {
        title: '買い物に行く',
        description: '牛乳、パン、卵を買う',
        done: false,
        userId: 1,
      },
      {
        title: '部屋の掃除',
        description: '掃除機をかける、片付けをする',
        done: true,
        userId: 1,
      },
    ],
  })
  console.log('シードデータが作成されました')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
