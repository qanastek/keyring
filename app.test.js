var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

const Instagram = require('./Instagram');
const Twitter = require('./Twitter');

/*
  Instagram
*/
describe('Instagram', function() {

  // PC
  describe('PC', function() {

    // Bad
    describe('BAD', function() {

      it('Domain Name', function() {
        expect(Instagram.checkUrlInstagram('https://www.instadgram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link')).to.be.false;
      });

      it('Route 4 Too much Content', function() {
        expect(Instagram.checkUrlInstagram('https://www.instagram.com/pppppppp/BvNA31nn2s1/?utm_source=ig_web_copy_link')).to.be.false;
      });  

      it('Protocol', function() {
        expect(Instagram.checkUrlInstagram('http://www.instagram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link')).to.be.false;
      });

      it('No Body', function() {
        expect(Instagram.checkUrlInstagram('https://www.instagram.com/p/')).to.be.false;
      });

      it('Unexpected Slash', function() {
        expect(Instagram.checkUrlInstagram('https://www.instagram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link/')).to.be.false;
      });

      it('Route 2 Unexpected Content', function() {
        expect(Instagram.checkUrlInstagram('https:/d/www.instagram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link')).to.be.false;
      });

    });

    // Good
    describe('GOOD', function() {

      it('Basic URL', function() {
        expect(Instagram.checkUrlInstagram('https://www.instagram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link')).to.be.true;
      });

    });

  });

  // Android
  describe('ANDROID', function() {

    // Good
    describe('GOOD', function() {

      it('Basic URL', function() {
        expect(Instagram.checkUrlInstagram('https://www.instagram.com/p/Bw22GHbFt0d/?utm_source=ig_share_sheet&igshid=m2pz2df6qtyd')).to.be.true;
      });

    });

  });

  // All
  describe('ALL', function() {

    // Bad
    describe('BAD', function() {

      it('Empty URL', function() {
        expect(Instagram.checkUrlInstagram('')).to.be.false;
      });

    });

  });

});

/*
  Twitter part
*/

/*test('[Twitter] PC / GOOD - Basic URL', async (done) => {
  expect(
    Twitter.checkUrlTwitter('https://twitter.com/lemondefr/status/1118445831789658112')
  ).toBe(true);
  
  done();
});

test('[Twitter] PC / BAD - Unexpected Letter', async (done) => {
  expect(
    Twitter.checkUrlTwitter('https://twitter.com/lemondefr/status/11184dd458317az89658sx112')
  ).toBe(false);
  
  done();
});

test('[Twitter] PC / BAD - Protocol', async (done) => {
  expect(
    Twitter.checkUrlTwitter('http://twitter.com/lemondefr/status/1118445831789658112')
  ).toBe(false);
  
  done();
});

test('[Twitter] ALL / BAD - Empty URL', async (done) => {
  expect(
    Twitter.checkUrlTwitter('')
  ).toBe(false);
  
  done();
});

test('[Twitter] PC / BAD - Domain Name', async (done) => {
  expect(
    Twitter.checkUrlTwitter('https://twittder.com/lemondefr/status/1118445831789658112')
  ).toBe(false);
  
  done();
});

test('[Twitter] PC / BAD - Route 4 Empty', async (done) => {
  expect(
    Twitter.checkUrlTwitter('https://twitter.com//status/1118445831789658112')
  ).toBe(false);
  
  done();
});

test('[Twitter] PC / BAD - Route 2 Unexpected Content', async (done) => {
  expect(
    Twitter.checkUrlTwitter('https:/d/twitter.com/lemondefr/status/1118445831789658112')
  ).toBe(false);
  
  done();
});*/