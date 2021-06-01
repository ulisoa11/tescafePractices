import {Selector} from 'testcafe'

class yourInformationPage{
    constructor(){
        this.firstNameField= Selector('#first-name')
        this.lastNameField= Selector('#last-name')
        this.cpField= Selector('#postal-code')
        this.continueButton= Selector('#continue')
        this.errorMessageName = Selector('div[class="error-message-container error"]')
    }
}
export default new yourInformationPage()