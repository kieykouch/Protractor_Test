// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
// An example configuration file. 
// exports.config = {
//     // The address of a running selenium server. 
//     seleniumAddress: 'http://localhost:4444/wd/hub', 
    
//     // Capabilities to be passed to the webdriver instance. 
//     capabilities: {
//         'browserName': 'chrome'
//     }, 

//     framework: 'jasmine',
    
//     // Spec patterns are relative to the current working directly when 
//     // protractor is called. 
//     specs: ['spec.js'], 
    
//     // Options to be passed to Jasmine-node. 
//     jasmineNodeOpts: {
//         showColors: true, 
//         defaultTimeoutInterval: 30000
//     }
// };