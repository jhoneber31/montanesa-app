import prisma from "../lib/prisma";
import { accounts } from "./accounts";

async function main() {
  await prisma.user.createMany({
    data: accounts,
  });

  console.log("Se ejecuto correctamente");
}
(() => {
  if(process.env.NODE_ENV === "production") return;

  main();
})();