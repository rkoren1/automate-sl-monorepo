import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.subPackage.create({
    data: {
      id: 1,
      packageName: 'Free Trial',
      packageDescription: 'Free Trial',
      pricePerWeek: 0,
      pricePerMonth: 0,
      discount: 0,
    },
  });
  await prisma.user.create({
    data: {
      email: 'test@gmail.com',
      password: '$2b$10$G0oloQNbWP63gHB2xD.Rz.foSzpXK3SDTCv.bcRdqUPY/hcha7Kny',
      lDollarBalance: 0,
      uuid: '34612378-854a-488f-8309-f82e2e59041a',
      avatarName: 'powergiga Resident',
    },
  });
  console.log('Seeded Successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
