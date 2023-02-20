///<reference types = 'cypress'/>

describe('JWT Sessions',()=>{
it('is logged through local storage', ()=>{

    cy.LoginAPI().then(function(){
        cy.visit("https://rahulshettyacademy.com/client/",
        {
            onBeforeLoad : function(window){
                window.localStorage.setItem('token' , Cypress.env('token'))
            }
        })
    })

    cy.get(".card-body button:last-of-type").eq(1).click()
    cy.get("[routerlink*='cart']").click()
    cy.contains("Checkout").click()
    cy.get("[placeholder*='Country']").type("Mex")
    cy.get(".ta-results button").each(($el, index, $list)=>{
        if($e1.text() === 'Mexico'){
            cy.wrap($e1).click()
          }
    })
    cy.contains("PLACE ORDER").click()
    cy.wait(2000)
    cy.get(".btn-primary").click()

})
})