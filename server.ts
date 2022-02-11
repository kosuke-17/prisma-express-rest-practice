import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const result = await prisma.user.create({
    data: {
      name: "Niko",
      email: "niko@aa.com",
      posts: {
        create: { title: "Prisma 入門" },
      },
    },
  });
  console.log(result);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
