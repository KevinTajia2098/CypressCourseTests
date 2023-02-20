//cypress - Spec

describe('My 4th Test', function() {
  it.only('4TH TestCase ', function(){
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

   cy.get('#opentab').then(function(e1){
    const url = e1.prop('href')
    cy.visit(url)
   })

  })

})
  
