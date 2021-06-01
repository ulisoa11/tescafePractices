import {Selector} from 'testcafe'

class carShopingPage {
    constructor(){
        this.carShopingTittle= Selector(".title")
        this.itemBikeLigth = Selector ('#item_0_title_link > div')
        this.itemBackPack = Selector ('#item_4_title_link > div')
        this.itemTShirt = Selector ('#item_1_title_link > div')
        this.itemJacket = Selector ('#item_5_title_link > div')
        this.checkoutButton = Selector ('button[id="checkout"]')


    }

}export default new carShopingPage()