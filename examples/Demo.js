/// <reference types= "Cypress"/>
/// <reference types= "cypress-iframe"/>
import 'cypress-iframe'

describe('Frame test', function() {
  it.only('Demo example ', function(){
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   cy.frameLoaded('#courses-iframe')

   cy.iframe().find("a[href='mentorship']").eq(0).click()
   cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',0)
  })

})
  
