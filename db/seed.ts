import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import sampleData from "./sample-data";


async function main() {
    const connectionString = `${process.env.DATABASE_URL}`;
    console.log(connectionString);
    const adapter = new PrismaPg({ connectionString });
    const prisma = new PrismaClient({ adapter });

    await prisma.product.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });

    console.log("Database seeded successfully");
}

main();