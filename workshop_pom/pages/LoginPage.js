import {Selector} from 'testcafe'

class LoginPage{
    constructor(){
        this.userNameField= Selector('input[name="user-name"]')
        this.passwordField= Selector('input[name="password"]')
        this.loginButton= Selector('input[name="login-button"]')
        this.errorMessage = Selector('div[class="error-message-container error"]')
    }
}
export default new LoginPage()

