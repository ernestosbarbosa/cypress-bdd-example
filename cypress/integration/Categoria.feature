# language: pt
Funcionalidade: Categorias

  @smokeTest
  Esquema do Cenario: Acessar Categoria
    Dado que acessei a pagina inicial
    Quando seleciono a categoria <categoria>
    Entao devo ser direcionado para o catalogo de <categoria>

    Exemplos:
      | categoria |
      | T-shirts  |