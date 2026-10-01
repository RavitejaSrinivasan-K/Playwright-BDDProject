
import {test} from '../fixtures/fixture'

import {createBdd} from "playwright-bdd"

const {Given, When, Then} = createBdd(test)

// npx bddgen

Given('I am open the SauceDemo', async ({login}) => {
 await login.navigate(process.env.BASE_URL)
});

When('I am enter username', async ({login}) => {
 await login.enterUsername(process.env.USER_NAME)
});

When('I am enter password', async ({login}) => {
  await login.enterPassword(process.env.PASSWORD)
});

When('I am click on Login Button', async ({login}) => {
 await login.clickOnLogin()
});

Then('I should see DashBoard Page', async ({login}) => {
 await login.verifyDashboard()
});



//Negative Scenario

Then('I should handle error', async ({login}) => {
 await login.verifyDashboard()
});





//DATA DRIVEN

Given('I am open the URL', async ({login}) => {
  await login.navigate(process.env.BASE_URL)
});


When('I am enter {string} and {string}', async ({login}, username, password) => {
  await login.enterUsername(username)
   await login.enterPassword(password)
});


Then('I should handle error or dashboard', async ({login}) => {
  await login.verifyDashboard()
});
 






