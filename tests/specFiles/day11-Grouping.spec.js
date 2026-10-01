

import {test} from "@playwright/test"

//we cannot use fixtures for grouping blocks

test.describe("Grouping with Login Functionality" , async ()=>{    

test("Login with Valid" , async ()=>{       //we have to use fixture here only like page, browser, context
    console.log("Valid user details")
})

test("Login with InValid" , async ()=>{
    console.log("InValid user details")
})

test("Login with edge" , async ()=>{
    console.log("EdgeCases user details")
})

})


test.describe("Grouping with Search Functionality" , async ()=>{
    
    
test("Search with Valid" , async ()=>{
    console.log("Exact input")
})

test("Search with InValid" , async ()=>{
    console.log("Invalid input")
})

test("Search with SpecialChar" , async ()=>{
    console.log("EdgeCase input")
})


})


/**
 * //1 BEFORE ALL
 * Runs once before any tests in the file or group start.
 * Setting up databases, starting a server, or loading global test data.
 * 
 * //2 BEFORE EACH
 * Runs before every individual test.
 * Navigating to a starting URL, launching a fresh page, or logging in.
 * 
 * 
 * //3 AFTER EACH
 * Runs after every individual test.
 * Cleaning up test data, taking screenshots on failure, or resetting state
 * 
 * //4 AFTER ALL
 * Runs once after all tests in the file or group finish.
 * Closing database connections, stopping servers, or exporting logs.
 */


  
//we cannot use fixtures in Hook blocks

test.beforeAll(async ()=>{
console.log("Connect the Server")
})

test.beforeEach(async ()=>{
console.log("Launch the URL")
})

test.afterEach(async ()=>{
console.log("Take Failure Screenshots")
})

test.afterAll(async ()=>{
console.log("Close the Server")
})



