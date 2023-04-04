import {test, expect} from '@playwright/test';

test("My first test", async ({ page }) => {
    expect(10).toBe(10)
});

test.skip("My second test", async ({ page }) => {
    expect(true).toBe(false)
});

test("My third test", async ({ page }) => {
    expect(true).toBeTruthy()
});

test("My fourth test", async ({ page }) => {
    expect(false).toBeFalsy()
});
