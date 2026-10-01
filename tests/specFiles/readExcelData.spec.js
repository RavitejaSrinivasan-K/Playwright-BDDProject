
import {test , expect} from "@playwright/test"

import {readExcel} from "../../utils/excelReader.js"

import {errorMessages} from "../../utils/constants.json"

const data = readExcel("Sheet1");

data.forEach((user, index) => {

    test(`Reading Data from Excel ${index + 1}`, async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill(user.USERNAME || "");
        await page.locator("#password").fill(user.PASSWORD || "");

        await page.locator("#login-button").click();

        const errorMsg = page.locator('[data-test="error"]');

        if (user.EXPECTED === "lockedUser") {

            await expect(errorMsg)
                .toHaveText(errorMessages[0].lockedUser);

        } else if (user.EXPECTED === "wrongUser") {

            await expect(errorMsg)
                .toHaveText(errorMessages[1].wrongUser);

        } else if (user.EXPECTED === "emptyUser") {

            await expect(errorMsg)
                .toHaveText(errorMessages[2].emptyUser);

        } else if (user.EXPECTED === "emptyPass") {

            await expect(errorMsg)
                .toHaveText(errorMessages[3].emptyPass);

        } else if (user.EXPECTED === "dashboard") {

            await expect(page.locator(".title"))
                .toHaveText(errorMessages[4].dashboardMsg);
        }
    });
});