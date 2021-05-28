import {Selector} from 'testcafe'

class ProductPage{
    constructor(){
        this.productTittle= Selector('span[class="title"]')
        
    }
}
export default new ProductPage()