//cypress - Spec

describe('My 4th Test', function() {
  it.only('4TH TestCase ', function(){
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   cy.get('#alertbtn').click()
   cy.get('[value="Confirm"]').click()

   //Window: alert
   cy.on('window:alert',(str) =>{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
   })

   cy.on('window:confirm',(str) =>{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
   })

   cy.get('#opentab').invoke('removeAttr', 'target').click()

   cy.url().should('include','rahulshettyacademy')
   
   cy.go('back')

  })

})
  
