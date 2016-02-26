// spec.js
describe('Protractor Demo App for Interview', function() {
  var title = "";
  var myaccount = element.all(by.linkText('my account'));
  var create = element(by.buttonText('Create Account'));

  var loginaccount = "na";
  var password = "na";


  function login(a, b) {
    element(by.id('inputEmailHandle')).sendKeys(a);
    element(by.id('inputPassword')).sendKeys(b);
    element(by.buttonText("Log In")).click();
    // the race between protractor and click event
    browser.driver.sleep(1000);
    browser.waitForAngular();
  }

  function search(a){
    element.all(by.id("query")).sendKeys(a);
    var enter = browser.actions().sendKeys(protractor.Key.ENTER);
    enter.perform();
  }

  beforeEach(function() {
    // Difficult when access the website which isn't angular, so ignoresynchronize can help with angular.wait
    browser.ignoreSynchronization = true;
    browser.driver.get('http://www.craigslist.com/');
  });

  it('Check Domain', function() {
    expect(browser.getCurrentUrl()).toBe('http://sfbay.craigslist.org/');
    title = "craigslist: SF bay area jobs, apartments, personals, for sale, services, community, and events";
    expect(browser.getTitle()).toEqual(title);
  });

  it('Register', function() {
    myaccount.click();
    title = "craigslist: account log in";
    expect(browser.getTitle()).toEqual(title);
    element.all(by.id("emailAddress")).sendKeys("jonatha@gmail.com");
    create.click();
    title = "craigslist | craigslist: account signup";
    expect(browser.getTitle()).toEqual(title);
  });

  it('Login and Logout', function() {
      myaccount.click();

      var loginpage= "https://accounts.craigslist.org/login";

      login(loginaccount,password);
      title = "craigslist account";
      expect(browser.getTitle()).toEqual(title);
      expect(browser.getCurrentUrl()).toBe('https://accounts.craigslist.org/login/home');
      element.all(by.linkText('log out')).click();
     
      expect(browser.getCurrentUrl()).toEqual(loginpage);
  });

  it('Search', function() {
        search("Software Engineering");
        title = 'SF bay area for sale "Software Engineering" - craigslist';
        expect(browser.getTitle()).toEqual(title);
    });

    it('Search housing in berkeley', function() {
        element.all(by.linkText('rooms / shared')).click();
        search("Berkeley");
        title = 'SF bay area rooms for rent & shares available "Berkeley" - craigslist';
        expect(browser.getTitle()).toEqual(title);
        var reuslt = element.all(by.css(".row"));
        expect(reuslt.count()).toEqual(100);
    });
});