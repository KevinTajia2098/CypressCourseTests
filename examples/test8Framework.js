/// <reference types= "Cypress"/>
import homePage from '../pageObjects/homePage'
import productPage from '../pageObjects/productsPage'
import ShopPage from '../pageObjects/ShopPage'
describe('My 4th Test', function() {

    before(function(){
    cy.fixture("example").then(function(data){
        this.data = data
    })
})

    it('4TH TestCase ', function(){
    const hPage = new homePage()
    const pPage = new productPage()
    const shopPage = new ShopPage()

    cy.visit(Cypress.env('url') + "/angularpractice/")
    //cy.visit(Cypress.env('userId'))

     hPage.getEditBox().type(this.data.name)
     hPage.getGender().select(this.data.gender)
     hPage.getTowWayDataBinding().should('have.value', this.data.name)
     hPage.getEditBox().should('have.attr', 'minlength','2')
     hPage.getEntrepreneaur().should('be.disabled')
     hPage.getShopTab().click()
    
     this.data.productName.forEach(function(element){
        cy.selectProduct(element)
     });

     pPage.checkOutButton().click()

     var sum = 0

     cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
        const amount = $el.text()
        cy.log($el.text())
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

     }).then(function(){
        cy.log(sum)
     })

     cy.get('h3 strong').then(function(element){
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
     })

     shopPage.checkOutShopButton().click()
     shopPage.selectCountry().type('India')
     shopPage.waitTime()
     shopPage.suggestions().click()
     shopPage.termsCheckBox().check({force: true})
     shopPage.purchaseButton().click()
     //cy.get('.alert').should('have.text', 'Thank you! Your order will be delivered in next few weeks :-).')
     cy.get('.alert').then(function(element){
        const actualText = element.text()
        expect(actualText.includes('Success')).to.be.true
     })


  
    })
})