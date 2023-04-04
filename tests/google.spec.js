import {test, expect} from '@playwright/test';

test.skip("To verify the page URL", async ({ page }) => {
    await page.goto("https://www.google.com/")

    let URL = page.url()
    console.log("The URL is : " + URL)
})

test("To verify page title", async({ page }) => {
    await page.goto("https://www.google.com/")

    let pageTitle = await page.title()
    console.log("Title is: " + pageTitle)
    expect(pageTitle).toEqual("Google")
})

test.skip("To open browser instance", async({ browser }) => { 
    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto("")
})