exports.config = {
    framework: 'jasmine2',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    getPageTimeout : 12000000,
    specs: ['testcases/test.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1440000,
    },
    capabilities: {
        browserName: 'firefox'
      }
  }