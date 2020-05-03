/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS
class Categoria {
    validarAcessoACategoria(categoria){
        cy.get(el.breadcrumb).should('contain.text', categoria)
    }
}
export default new Categoria()