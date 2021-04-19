
describe('Test out otcmarkets website', function() {
    var quoteInput = element(by.xpath('//*[@id="root"]/div/div[2]/div[1]/div[1]/div/div[1]/input'));
    var heading = element(by.xpath('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div/div/div[1]/h1[1]'));
    var securityDetailsBtn = element(by.xpath('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div/div[5]/div/div[1]/div/div[5]'));
    var linkbtn = element(by.xpath('//*[@id="root"]/div/div[2]/div[1]/div[1]/div/div[2]/div'));
    var quotebtn = element(by.xpath('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div/div[5]/div/div[1]/div/div[3]/a'))
    var quoteMarketCap = element(by.xpath('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div/div[5]/div/div[2]/div/div[1]/div[11]/p'))
    var securitymarketCap = element(by.xpath('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div/div[5]/div/div[2]/div/div[2]/div[1]/b/span/span'));
    var dollaramount = element(by.xpath('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div/div[5]/div/div[2]/div/div[2]/div[2]'));
    var date = element(by.xpath('//*[@id="root"]/div/div[2]/div[2]/div[2]/div/div/div/div[5]/div/div[2]/div/div[2]/div[3]'));


    beforeEach(function()  {
      browser.get('https://www.otcmarkets.com/');
      browser.waitForAngularEnabled(false);
      });

    it('heading and input should be the same name', function() {
        quoteInput.sendKeys('OTCM');
        browser.sleep(10*1000)
        linkbtn.click()
        expect(heading.getText()).toEqual('OTCM');
      });

      it('Market Cap on Quote page should match Security Details page', function() {
        quoteInput.sendKeys('OTCM');
        browser.sleep(10*1000)
        linkbtn.click()
        browser.sleep(10*1000)
        quotebtn.click()
        browser.sleep(10*1000)
        securityDetailsBtn.click()
        expect(quoteMarketCap.getText()).toEqual(securitymarketCap.getText());
      });

console.log(securitymarketCap.getText() + " " + dollaramount.getText() + " " + date.getText())

//RHHBY Quote

it('heading and input should be the same name', function() {
  quoteInput.sendKeys('RHHBY');
  browser.sleep(10*1000)
  linkbtn.click()
  expect(heading.getText()).toEqual('RHHBY');
});

it('Market Cap on Quote page should match Security Details page', function() {
  quoteInput.sendKeys('RHHBY');
  browser.sleep(10*1000)
  linkbtn.click()
  browser.sleep(10*1000)
  quotebtn.click()
  browser.sleep(10*1000)
  securityDetailsBtn.click()
  expect(quoteMarketCap.getText()).toEqual(securitymarketCap.getText());
});

console.log(securitymarketCap.getText() + " " + dollaramount.getText() + " " + date.getText())

//ADBCF Quote

it('heading and input should be the same name', function() {
  quoteInput.sendKeys('ABDCF');
  browser.sleep(10*1000)
  linkbtn.click()
  expect(heading.getText()).toEqual('ABDCF');
});

it('Market Cap on Quote page should match Security Details page', function() {
  quoteInput.sendKeys('ADBCF');
  browser.sleep(10*1000)
  linkbtn.click()
  browser.sleep(10*1000)
  quotebtn.click()
  browser.sleep(10*1000)
  securityDetailsBtn.click()
  expect(quoteMarketCap.getText()).toEqual(securitymarketCap.getText());
});

console.log(securitymarketCap.getText() + " " + dollaramount.getText() + " " + date.getText())
});