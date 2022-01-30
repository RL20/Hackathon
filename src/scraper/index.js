const puppeteer = require("puppeteer");

const getTitles = async (page) => {
  const titles = [];
  const elements = await page.$$("div.col > div.col-limit > a > div.card > h4.card-title");
  for (elem of elements) {
    const title = await page.evaluate((el) => el.textContent, elem);
    titles.push(title);
  }
  return titles;
};

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.foodsdictionary.co.il/Recipes/Kitchen/2");

  const titles = await getTitles(page);
  console.log(titles);

  await browser.close();
};

main();

// data = [

//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   },
//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   },
//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   },
//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   },
//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   },
//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   },
//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   },
//   {
//     id,
//     image,
//     recipeUrl,
//     title: "סלט בוראטה",
//     origin:"איטלקי"
//   }

// ];
