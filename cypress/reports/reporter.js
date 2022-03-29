const reporter = require('mochawesome-report-generator');

const options = {
    theme: 'bootstrap',
    jsonDir: 'mochawesome-report',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name":"Automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};

reporter.generate(options);