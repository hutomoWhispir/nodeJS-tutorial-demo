import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () => {
  it('should pass', () =>{
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");

    //creating virtual DOM to mimic real browser functionality
    //index is the page being rendered
    jsdom.env(index, function(err, window){
      //get the first h1 element [0]
      const h1 = window.document.getElementsByTagName('h1')[0];
      //Assertion test
      expect(h1.innerHTML).to.equal(" Hello World!");
      done();
      window.close();
    });
  });
});
