describe('Check if create profile renders the correct components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })
  it('should steps 1 and 2 works', () => {
    cy.get('input[type="text"]').type('Tester Cypress001')
    cy.get('input[type="email"]').type('tester001@tester.com')
    cy.get('input[type="tel"]').type('Tester Cypress001')
    cy.get('button[type="submit"').click()
    cy.get('input[type="password"]').type('1234@abcD')
    cy.get('button[type="submit"').should('be.visible')
  })
})
