import { t } from 'testcafe'
import carShopingPage from '../pages/carShopingPage'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import yourInformationPage from '../pages/yourInformationPage'
const validUser = "standard_user"
fixture ('error checkout information FirstName error')
.page('https://www.saucedemo.com/')

test('firstName error', async t =>{
    await t.
    typeText(LoginPage.userNameField,validUser, {paste:true})
    .typeText(LoginPage.passwordField,"secret_sauce", {paste:true})
    .click(LoginPage.loginButton)
    .click(ProductPage.item0)
    .click(ProductPage.shopButton)
    .click(carShopingPage.checkoutButton)
    .typeText(yourInformationPage.lastNameField,"soto",{paste: true})
    .typeText(yourInformationPage.cpField,"68310",{paste: true})
    .click(yourInformationPage.continueButton)

    //await t.expect (yourInformationPage.errorMessageName.exists).ok
    await t.expect (yourInformationPage.errorMessageName.innerText).eql("Error: First Name is required")
    
})



