const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Web Developmnet" },
        { name: "App/Game Development" },
        { name: "Programming Basics" },
        { name: "AI/GPT" },
        { name: "Database" },
        { name: "Design" },
        { name: "Job Preperation" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
