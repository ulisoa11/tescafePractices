import { t } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
const validUser = "standard_user"
fixture ('login page')
.page('https://www.saucedemo.com/')

test('logout user', async t =>{
    await t.
    
    typeText(LoginPage.userNameField,validUser, {paste:true})
    .typeText(LoginPage.passwordField,"secret_sauce", {paste:true})
    .click(LoginPage.loginButton)
    .click(ProductPage.menuBotton)
    .click(ProductPage.logoutBotton)
    await t.expect (LoginPage.loginButton.exists).ok
})



