//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
//customConfig.js
var origFn = browser.driver.controlFlow().execute;
 
browser.driver.controlFlow().execute = function () {
    var args = arguments;
    
    origFn.call(browser.driver.controlFlow(), function () {
        //increase or reduce time value, its in millisecond
        return protractor.promise.delayed(200);
    });
    
    return origFn.apply(browser.driver.controlFlow(), args);
};