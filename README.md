# Cypress + BDD

Projeto de exemplo para realização de testes utilizando o Cypress e features em BDD.

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")

## Estrutura de pastas

📦cypress-bdd-example

 ┣ 📂cypress  
 ┃ ┣ 📂fixtures  
 ┃ ┃ ┗ 📜example.json  
 ┃ ┣ 📂integration  
 ┃ ┃ ┗ 📂Categoria  
 ┃ ┃ ┃ ┗ 📜steps.js  
 ┃ ┃ ┗ 📜Categoria.feature  
 ┃ ┣ 📂plugins  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┣ 📂reports  
 ┃ ┃ ┗ 📜report.js  
 ┃ ┗ 📂support  
 ┃ ┃ ┗ 📂pages  
 ┃ ┃ ┃ ┗ 📂Categoria  
 ┃ ┃ ┃ ┃ ┣ 📜elements.js  
 ┃ ┃ ┃ ┃ ┗ 📜index.js  
 ┃ ┃ ┃ ┗ 📂Home  
 ┃ ┃ ┃ ┃ ┣ 📜elements.js  
 ┃ ┃ ┃ ┃ ┗ 📜index.js  
 ┃ ┃ ┣ 📜commands.js  
 ┃ ┃ ┗ 📜index.js  
 ┣ 📜README.md  
 ┣ 📜cypress.json  
 ┗ 📜package.json  

## Tutorial, Instalação e execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm i
```

### Tutorial para iniciar um novo projeto utilizando está estrutura

* Dentro da pasta especifica para o projeto:
```
npm init -y
```

* Instalar a última versão do cypress:
```
npm i cypress -D
```

* Em um terminal execute o comando abaixo para abrir o cypress:
```
cypress open 
```

* Para executar as features diretamente use:
```
cypress run 
```

### Gerando o report:  
```
node cypress/reports/report.js
```
