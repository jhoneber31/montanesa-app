import { initialData } from "./seed";
import prisma from '../lib/prisma';
import { countries } from "./seed-countries";

async function main () {

  // 1.Borrar registros
  // await Promise.all([
    await prisma.orderAddress.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.userAddress.deleteMany();
    await prisma.user.deleteMany();
    await prisma.country.deleteMany();
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
  // ]);

  // 2. Categorias
  const { categories, products, users } = initialData;

  await prisma.user.createMany({
    data: users
  });

  await prisma.country.createMany({
    data: countries
  });

  const categoriesData = categories.map(category => ({
    name: category
  }));

  await prisma.category.createMany({
    data: categoriesData
  });

  //3. relacionar productos con categorias

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    
    map[category.name.toLowerCase()] = category.id;
    
    return map;
  }, {} as Record<string, string>);


  products.forEach(async(product) => {
    const { images, category, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[category.toLowerCase()]
      }
    });

    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }))

    await prisma.productImage.createMany({
      data: imagesData
    })

  })

  console.log("Se ejecuto correctamente");

}
(() => {

  if(process.env.NODE_ENV === "production") return;

  main();
})();