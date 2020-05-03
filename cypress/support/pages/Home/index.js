/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS
class Home {
    acessar(){
        cy.visit("/")
    }
    acessarCategoria(categoria){
        cy.get(el.categorias.replace('{categoria}', categoria)).last().click()
    }
}
export default new Home()