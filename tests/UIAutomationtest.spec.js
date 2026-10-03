const {test,expect} = require('@playwright/test')


test('First test', async({page})=> {
    await page.goto("https://google.com/");
    const title=await page.title();
    console.log("Title is: ",title);
    await expect(page).toHaveTitle("Google");
})

