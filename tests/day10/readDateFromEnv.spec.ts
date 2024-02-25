import { test } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.LT_USERNAME as string;
const password = process.env.LT_PASSWORD as string;


test(`Login Test Using .env file`, async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('.decorativeSubmit');
})