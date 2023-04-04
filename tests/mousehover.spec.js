import { test, expect } from '@playwright/test'

test.describe("To test mouse hover functionaliry",async () => {
    
    test("To perform mouse hover function", async({ page }) => {
        await page.goto("https://www.myntra.com/")

        await page.locator("//a[@class='desktop-main'][normalize-space()='Men']").hover()

        await page.waitForTimeout(3000)
        
        await page.locator("//a[normalize-space()='Sweatshirts']").screenshot({path: "screenshot.png"})

        await page.waitForTimeout(3000)

    })
})