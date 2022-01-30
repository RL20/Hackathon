const puppeteer = require("puppeteer-extra");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin());

const getRecipes = async (page, origin) => {
  const recipes = await page.evaluate((origin) => {
    let recipes = [];
    const recipeHolders = document.querySelectorAll("div.col-limit");
    for (let i = 0; i < recipeHolders.length; i++) {
      const recipeHolder = recipeHolders[i];
      const imageUrl = recipeHolder.querySelector("a > div > div.img-hover-ef > img").src;
      const title = recipeHolder.querySelector("a > div > h4").innerText;
      const recipeDescription = recipeHolder.querySelector("a > div > p.card-text").innerText;
      const recipeUrl = recipeHolder.querySelector("a").href;

      recipes.push({ imageUrl, title, recipeUrl, recipeDescription, origin: origin });
    }

    return recipes;
  }, origin);
  return recipes;
};

const scraper = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.foodsdictionary.co.il/Recipes/Kitchen/39/");
  await page.setViewport({
    width: 1200,
    height: 800,
  });

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
    while (await isNextButton(page, buttonSelector)) {
      console.log(currentOrigin);
      await page.waitForTimeout(1000);
      await scrollToBottom(page);
      recipes = [...recipes, ...(await getRecipes(page, currentOrigin))];
      page.click(buttonSelector);
      await page.waitForTimeout(1000);
    }
  }

  console.log(recipes);

  await browser.close();
};

scraper();

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

async function isSelector(page, selector) {
  return await page.$(selector);
}

async function isNextButton(page, selector) {
  return await page.$eval(selector, (el) => {
    return el.querySelector("a")?.innerText?.includes("הבא");
  });
}
