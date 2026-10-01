
import {test , expect} from "@playwright/test" ;

test("TC_001 Validating Amazon Title & Url" , async function({page}){   //Fixture

    //browser
    await page.goto('https://www.amazon.in/')

    //get title & url
    const pageTitle = await page.title()
    const pageUrl = await page.url()

    console.log(pageTitle)
    console.log(pageUrl)

    //validate both
    await expect(page).toHaveTitle(pageTitle)
    await expect(page).toHaveURL(pageUrl)

})


// Open a Reports                   - npx playwright show-report
// Run all Scripts                  - npx playwright test
// Run a specific file              - npx playwright test example.spec.js 
// Run a spec file & headed mode    - npx playwright test example.spec.js --headed
// Run a spec file & spec browser   - npx playwright test examples.spec.js --project=chromium














