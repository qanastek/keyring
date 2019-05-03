const Instagram = require('./checkUrlInstagram');

test('checkUrlInstagram Good PC', async (done) => {
  expect(
    Instagram.checkUrlInstagram('https://www.instagram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link')
  ).toBe(true);
  
  done();
});

test('checkUrlInstagram Good Android', async (done) => {
  expect(
    Instagram.checkUrlInstagram('https://www.instagram.com/p/Bw22GHbFt0d/?utm_source=ig_share_sheet&igshid=m2pz2df6qtyd')
  ).toBe(true);
  
  done();
});

test('checkUrlInstagram Picture Android', async (done) => {
  expect(
    Instagram.checkUrlInstagram('https://www.instagram.com/p/Bw3tdgmBTly/?utm_source=ig_share_sheet&igshid=5nrdrpulvotn')
  ).toBe(false);
  
  done();
});

test('checkUrlInstagram bad domain name', async (done) => {
  expect(
    Instagram.checkUrlInstagram('https://www.instadgram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link')
  ).toBe(false);
  
  done();
});

test('checkUrlInstagram bad route', async (done) => {
  expect(
    Instagram.checkUrlInstagram('https://www.instagram.com/pppppppp/BvNA31nn2s1/?utm_source=ig_web_copy_link')
  ).toBe(false);  
  
  done();
});

test('checkUrlInstagram bad protocol', async (done) => {
  expect(
    Instagram.checkUrlInstagram('http://www.instagram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link')
  ).toBe(false);  
  
  done();
});

test('checkUrlInstagram bad body', async (done) => {
  expect(
    Instagram.checkUrlInstagram('https://www.instagram.com/p/')
  ).toBe(false);  
  
  done();
});

test('checkUrlInstagram unexpected slash', async (done) => {
  expect(
    Instagram.checkUrlInstagram('https://www.instagram.com/p/BvNA31nn2s1/?utm_source=ig_web_copy_link/')
  ).toBe(false);  
  
  done();
});