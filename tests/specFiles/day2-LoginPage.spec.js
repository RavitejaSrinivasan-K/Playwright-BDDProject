

import {test , expect} from "@playwright/test";

test("Handling Login Page" , async function({page}){

    //browser
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await page.pause()   //Debug

    //username & password
    await page.locator('[id="username"]').fill("student")
    await page.locator('[name="password"]').fill("Password123")

    //login button
    await page.locator('button#submit').click()

    //DashBoard validation
    await expect(page).toHaveTitle(await page.title())

    await expect(page.locator('[class="post-title"]')).toBeVisible()

    await expect(page.locator('[class="post-title"]')).toHaveText("Logged In Successfully")

})







