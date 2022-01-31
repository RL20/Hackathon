const puppeteer = require("puppeteer-extra");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
const { filterFunc } = require("./cutting-strings.js");
puppeteer.use(AdblockerPlugin());

const scraper = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 800,
  });

  await page.exposeFunction("filterFunc", filterFunc);

  let allRecipes = [];

  const originLinks = await getOriginLinks(page);

  for (let i = 0; i < originLinks.length; i++) {
    const originRecipes = await scrapeOriginData(page, originLinks[i]);
    allRecipes = [...allRecipes, ...originRecipes];
  }

  console.log(allRecipes.length);
  console.log(allRecipes);

  await browser.close();

  return allRecipes;
};

// scraper();

async function scrapeOriginData(page, originURL) {
  await page.goto(originURL);

  const buttonSelector = "ul.paging-toolbar > li:last-child";

  const titleSelector = "div.col-last-box > div > h4";

  const currentOrigin = await page.$eval(titleSelector, (e) => e.innerText);

  let recipes = [];

  if (!(await isSelector(page, buttonSelector))) {
    // Single Page
    await scrollToBottom(page);
    recipes = await getRecipes(page, currentOrigin);
  } else {
    // Multi Page
    let i = 0;
    while ((await isNextButton(page, buttonSelector)) && i < 1) {
      await page.waitForTimeout(1000);
      await scrollToBottom(page);
      recipes = [...recipes, ...(await getRecipes(page, currentOrigin))];
      page.click(buttonSelector);
      await page.waitForTimeout(1000);
      i++;
    }
  }

  return recipes;
}

async function isSelector(page, selector) {
  return await page.$(selector);
}

async function isNextButton(page, selector) {
  return await page.$eval(selector, (el) => {
    return el.querySelector("a")?.innerText?.includes("הבא");
  });
}

async function getOriginLinks(page) {
  await page.goto(`https://www.foodsdictionary.co.il/Recipes/Kitchen`);
  const linksArray = await page.evaluate(() => {
    let linksArray = [];
    const linkHolders = document.querySelectorAll(".col-4 ");
    for (let i = 0; i < linkHolders.length; i++) {
      const link = linkHolders[i];
      const resultLink = link.querySelector("a").href;
      linksArray.push(resultLink);
    }
    return linksArray;
  });
  return linksArray;
}

async function getRecipes(page, origin) {
  const recipes = await page.evaluate(async (origin) => {
    let recipes = [];
    const recipeHolders = document.querySelectorAll("div.col-limit");
    for (let i = 0; i < recipeHolders.length; i++) {
      const recipeHolder = recipeHolders[i];
      const imageUrl = recipeHolder.querySelector("a > div > div.img-hover-ef > img").src;
      const title = recipeHolder.querySelector("a > div > h4").innerText;
      const filteredTitle = await filterFunc(origin, title);
      const recipeDescription = recipeHolder.querySelector("a > div > p.card-text").innerText;
      const recipeUrl = recipeHolder.querySelector("a").href;

      recipes.push({ imageUrl, title: filteredTitle, recipeUrl, recipeDescription, origin: origin });
    }

    return recipes;
  }, origin);
  console.log("page complete");
  return recipes;
}

async function scrollToBottom(page) {
  const distance = 100; // distance to scroll by
  const delay = 100; // delay in ms
  while (
    await page.evaluate(
      () => document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight
    ) // while bottom is not reached scroll
  ) {
    await page.evaluate((y) => {
      document.scrollingElement.scrollBy(0, y);
    }, distance);
    await page.waitForTimeout(delay);
  }
}

module.exports = scraper;
