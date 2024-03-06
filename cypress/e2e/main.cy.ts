// https://on.cypress.io/api

describe('Test Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Visit main page', () => {
    cy.contains('h1', 'Tecnologias')
    cy.contains('h1', 'Descobrir')
  })

  it('Interact with navigation bar', () => {
    cy.get('[data-testid="v-button-menu"]').click()
    cy.contains('a', 'Meu Vivo empresas')
    cy.contains('a', 'Meu Vivo')
    cy.get('[data-testid="v-button-menu"]').click()
  })

  it('Interacts with carousel', () => {
    const card = '[data-testid="v-tech-card"]' 
    const prevBtn = cy.get('div.swiper-button-prev')
    const nextBtn = cy.get('div.swiper-button-next')

    cy.contains(card, 'simCard')
    nextBtn.click()
    cy.contains(card, 'Esim')
    nextBtn.click()
    cy.contains(card, 'Tecnologia')
    prevBtn.dblclick()
    cy.contains(card, 'simCard')
  })
})
