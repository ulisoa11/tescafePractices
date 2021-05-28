import { t } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'

fixture ('login page')
.page('https://www.saucedemo.com/')

test('only user valid credential', async t =>{
    await t.
    typeText('#user-name', 'tarea')
    .typeText(LoginPage.userNameField,"problem_user", {paste:true})
    .typeText(LoginPage.passwordField,"secret_sauce", {paste:true})
    .click(LoginPage.loginButton).click(LoginPage.loginButton)

    await t.expect (ProductPage.productTittle.innerText).eql("PRODUCTS")
})

test('only user invalid credentials', async t =>{
    await t.
    typeText('#user-name', 'tarea')
    .typeText(LoginPage.userNameField,"ulisoa", {paste:true})
    .typeText(LoginPage.passwordField,"ulisoa11", {paste:true})
    .click(LoginPage.loginButton)


    await t.expect (LoginPage.errorMessage.exists).ok
    await t.expect (LoginPage.errorMessage.innerText).eql("Epic sadface: Username and password do not match any user in this service")
})

