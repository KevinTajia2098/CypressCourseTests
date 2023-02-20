//cypress - Spec

describe('My third Test', function() {
  it('Third TestCase ', function(){
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   //Checkbox
   cy.get('#checkBoxOption1').check().should('be.checked')
   cy.get('input[type="checkbox"]').check(['option2','option3'])
   cy.get('#checkBoxOption2').uncheck().should('not.be.checked')

   //Radiobutton
   cy.get('[for="radio1"] > .radioButton').first().check().should('be.checked')

   //Static dropdown list
   cy.get('select').select('option1').should('have.value', 'option1')

   //Dynamic Dropdown
   cy.get('#autocomplete').type('Mexico')

   cy.get('.ui-menu-item div').each(($e1, index, $list) => {

    if($e1.text === 'Mexico'){
      $e1.click()
    }

   })

   cy.get('#autocomplete').should('have.value', 'Mexico')


   //Visible invisble
   cy.get('#displayed-text').should('be.visible')
   cy.get('#hide-textbox').click()
   cy.get('#displayed-text').should('not.visible')
   cy.get('#show-textbox').click()
   cy.get('#displayed-text').should('be.visible')


  })

})
  
