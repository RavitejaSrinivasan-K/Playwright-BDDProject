
import data from "../testData/testData.json"
import {expect} from "@playwright/test"  


export class HomePage {

    constructor(page){
        this.page = page
        this.priceDropDown = page.locator('[class="    product_sort_container"]')
        this.productNameText = page.locator(`//div[text()="${data.productName}"]`)
        this.addToCartBtn = page.locator('[id="add-to-cart"]')
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
    }

    async selectDropDown(value){
        await this.priceDropDown.selectOption(value)
    }

    async selectProduct(){
        await this.productNameText.click()
    }

    async addtoCart(){
        await this.addToCartBtn.click()
    }

    async cartIconOption(){
        await this.cartIcon.click()
    }

    async verifyUrl(){
        await expect(this.page).toHaveURL(/cart/)
    }
}























