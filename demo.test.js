const request = require('supertest');
const app = require('./app.js');

describe('GET /', function() {
  it('responds 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

/*
request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
*/