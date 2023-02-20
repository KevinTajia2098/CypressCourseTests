class ShopPage{

    checkOutShopButton(){
       return cy.contains('Checkout')
    }

    selectCountry(){
       return cy.get('#country')
    }

    waitTime(){
       return Cypress.config('defaultCommandTimeout', 8000)
    }

    suggestions(){
       return cy.get('.suggestions > ul > li > a')
    }

    termsCheckBox(){
       return cy.get('#checkbox2')
    }

    purchaseButton(){
        return cy.get('.ng-untouched > .btn')
    }

    



}
export default ShopPage 