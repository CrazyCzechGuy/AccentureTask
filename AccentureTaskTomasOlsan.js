/// <reference types="Cypress" />

context('Let it go to the main page', () => {
  beforeEach(() => {
    // set up the screen size, visit homepage of selected eshop
	cy.viewport(1920, 1080) 
	cy.visit('https://www.swagat.cz/', { timeout: 10000 })
  })

  //function to navigate to some category, list products, add two most expensive products into shopping cart
  it('Listing the most expensive products, adding two of them', function() {    
	//all have asserts in the form of should be visible method
	cy.contains('POTRAVINY').should('be.visible').click() 
	cy.contains('Nejdražší').should('be.visible').click() 
	cy.wait(2000)
	//adding two most expensive products
	cy.get('#products > div:nth-child(1) > div > div > div.p-bottom > div > div.p-tools > form > button > span').should('be.visible').click()
	cy.get('#products > div:nth-child(2) > div > div > div.p-bottom > div > div.p-tools > form > button').should('be.visible').click()
	//checking if they were added into shopping cart
	cy.get('#header > div > div.header-top > div.navigation-buttons > a').should('be.visible').click()
	//if you want a screenshot at the end of the test then uncomment the command below
	//cy.screenshot('two-products-selected')	
  })
})

