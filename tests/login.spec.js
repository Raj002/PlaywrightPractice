import {test, expect} from '@playwright/test'

test.describe("Login E2E test", async() => {
    // All test under describe will get retry twice
    test.describe.configure({ retries: 2 });
    test("To test login functionality with valid data", async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        await page.getByPlaceholder("Username").type("Admin", {delay: 300})
        await page.locator("input[name='password']").type("admin123", {delay: 200})
        await page.locator("//button[@type='submit']").click()
        
        await page.waitForTimeout(5000)
    
        await expect(page).toHaveURL(/dashboard/)
    
        await page.getByAltText("profile picture").first().click()
        await page.getByText("Logout").click()
    
        await page.waitForTimeout(3000)
    
        await expect(page).toHaveURL(/login/)
    })
    
    test("To test login functionality with invalid data", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        await page.getByPlaceholder("Username").fill("Admin")
        await page.locator("input[name='password']").type("admin", {delay: 200})
        await page.locator("//button[@type='submit']").click()
    
        let errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()
        console.log("Error message is: " + errorMessage)
    
        expect(errorMessage).toEqual("Invalid credentials")
    })
})
