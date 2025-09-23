describe('Login Flow Correc Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })
  it('should login with valid credentials', () => {
    cy.get('input[type="email"').type('sandro@sandro.com')
    cy.get('input[type="password"').type('123456789')
    cy.get('button[type="submit"').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})
describe('Login Flow invalid Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })
  it('should login with invalid credentials', () => {
    cy.get('input[type="email"]').type('test@sandro.com')
    cy.get('input[type="password"]').type('asdfghj1234')
    cy.get('button[type="submit"]').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })
})
