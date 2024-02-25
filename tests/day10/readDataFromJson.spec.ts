import { test } from "@playwright/test";
import fs from 'fs';
import path from "path";

const loginDatas = JSON.parse(fs.readFileSync(path.join(__dirname, 'loginData.json'), 'utf-8'));

for (const loginData of loginDatas) {

    test(`Executing ${loginData.username}`, async ({ page }) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.fill('#username', loginData.username);
        await page.fill('#password', loginData.password);
        await page.click('.decorativeSubmit');
    })
}