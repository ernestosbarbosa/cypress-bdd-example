const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './cypress/reports/cucumber-json',
    reportPath: './cypress/reports/html',
    pageTitle: 'Cypress Report',
    reportName: 'Cypress Report'
});