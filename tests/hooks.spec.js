import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log("Before all function");
});

test.afterAll(async () => {
  console.log("After all function");
});

test("First execution", async ({ page }) => {
  console.log("First method");
});

test("Second execution", async ({ page }) => {
  console.log("Second method");
  await page.screenshot({ path: "screenshot.png", fullPage: true});
});

test("Third execution", async ({ page }) => {
  console.log("Third method");
});

test("Fourth execution", async ({ page }) => {
  console.log("Fourth method");
});
