import {test, expect} from '@playwright/test'

test.describe("Dropdown field validation", async () => {

    test("To select dropdown option", async({ page }) => {
        await page.goto("https://freelance-learn-automation.vercel.app/signup")
        await page.waitForTimeout(3000)

        await page.getByPlaceholder("Name").fill("test user")
        await page.getByPlaceholder("Password").fill("test 123")

        await page.locator("(//input[@type='checkbox'])[3]").click()

        let drpField = page.locator('#state');

        await drpField.selectOption({label: 'Kerala'})
        await page.waitForTimeout(5000)

        await drpField.selectOption({value: 'Tamil Nadu'})
        await page.waitForTimeout(3000)

        await drpField.selectOption({index: 3})
        await page.waitForTimeout(3000)
    })

    test("To validate dropdown options",async ({ page }) => {
        await page.goto("https://freelance-learn-automation.vercel.app/signup")
        await page.waitForTimeout(3000)

        let drpField = page.locator('#state');

        // Dropdown values validation
        // Method - 1
        let drpValues = await drpField.textContent()
        console.log("Value: " + drpValues)
        expect(drpValues.includes("Kerala")).toBeTruthy()

        // Method - 2
        // Using for loop validation
        let dropdownValues = await page.$$("select[id='state'] option")
        for (let i = 0; i < dropdownValues.length; i++) {
            const element = dropdownValues[i];
            console.log("dropdown value: " + await element.textContent())
        }

        await page.locator("#hobbies").selectOption(['Playing','Swimming'])
        await page.waitForTimeout(3000)
    })
})