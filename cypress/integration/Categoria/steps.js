import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../support/pages/Home'
import categoriaPage from '../../support/pages/Categoria'

Given("que acessei a home do site", () => {
    homePage.acessar()
})

When(/^seleciono a categoria (.*)$/, categoria => {
    homePage.acessarCategoria(categoria)
})

Then(/^devo ser direcionado para o catalogo de (.*)$/, categoria => {
    categoriaPage.validarAcessoACategoria(categoria)
})