

  
export class LoginPage {

    constructor(page){
        this.page = page
        this.usernameField = page.locator('[id="user-name"]')
        this.passwordField = page.locator('[id="password"]')
        this.loginButton   = page.locator('[id="login-button"]')
        this.dashboard     = page.locator('[class="title"]')
        this.errorMsg      = page.locator('//h3[@data-test="error"]')
    }

    // open a browser
    async navigate(url){
    await this.page.goto(url)
    }

    //enter username 
    async enterUsername(user){
        await this.usernameField.fill(user)
    }

    //enter password
    async enterPassword(pass){
        await this.passwordField.fill(pass)
    }

    //user clickin on login button
    async clickOnLogin(){
        await this.loginButton.click()
    }

    //then verify dashboad or error msgs
    async verifyDashboard(){
   
        const message = await this.errorMsg

        if(await message.isVisible()){
            console.log(await this.errorMsg.textContent())
        }
        else{
            console.log(await this.dashboard.textContent() , "is Visibled")
        }
        

    }

   

}























