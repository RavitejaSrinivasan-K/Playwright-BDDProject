

import {test, expect} from "@playwright/test"


test("Handling Drop Down" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('text=Country:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Select DropDown
    const dropDown = page.locator('[id="country"]')

    //1. Visible
    await dropDown.selectOption('India')
    await page.waitForTimeout(2000)

    //2. Label
    await dropDown.selectOption({label : "Japan"})
    await page.waitForTimeout(2000)

    //3. Value
    await dropDown.selectOption({value : "france"})
    await page.waitForTimeout(2000)

    //4. Index
    await dropDown.selectOption({index : 2})
    await page.waitForTimeout(2000)

    //Assert
    await expect(page.locator('[id="country"] option')).toHaveCount(10)
    await expect((await page.$$('//select[@id="country"]//option[@value]')).length).toBe(10)

})





test("Handling Multiple DropDown" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('label:has-text("Colors:")').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //select
    await page.locator('[id="colors"]').selectOption(["Blue" , "Yellow" , "White"])
    await page.waitForTimeout(4000)

    //Unselect
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(4000)

    //select
    await page.locator('[id="colors"]').selectOption([{label : 'Blue'} , {value : 'yellow'} , {index : 5}])
    await page.waitForTimeout(4000)

})




test("Handling Dynamic DropDown" , async ({page})=>{

    //browser
    await page.goto("https://ticketnew.com/movies/chennai")

    //wait
    const searchBox1 = page.locator('//div[text()="Search for movies, cinemas and more"]')

    //wait for first matched selector
    await searchBox1.first().waitFor({state : 'visible'})

    //click
    await searchBox1.first().click()

    //search
    const searchBox2 = page.locator('//input[contains(@class,"dds-rounded-lg dds-outline-none dds-transition-all")]')

    //wait for last matched selector
    await searchBox2.last().waitFor()

    await searchBox2.last().fill("man")

    //wait for all selectors
    await page.waitForSelector('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')

    //Aproach - 1

    // let searchList = await page.$$('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')

    // for (const element of searchList) {
    //    const txt = await element.textContent()

    //    if(txt.trim() === "Spider-Man: Brand New Day"){
    //     await element.click()
    //     break
    //    }
    // }  


    //Approach - 2

    let searchList = page.locator('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')


    for(let i=0; i < await searchList.count(); i++){  //i < 20

      const item =  await searchList.nth(i)
      const txt = await item.textContent()

        if(txt.trim() === "Spider-Man: Brand New Day"){
        await item.click()
        break
       }
    }


    //hard wait
    await page.waitForTimeout(3000)

})












































