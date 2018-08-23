import * as request from 'supertest';
import {} from 'jest';
import * as chai from 'chai';
import { expect, should } from 'chai';
import * as app from '../server';

// import * as chaiJson from 'chai-json';
chai.use(require('chai-json'));

describe('GET /api/admin', () => {
  it('should return 200 OK', () => {
    return request(app)
      .get('/api/admin')
      .then(res => {
        expect(res.status).to.be.equal(200);
      // expect(res).to.be.jsonObj(res);
      });    
  });
});

// describe('GET /api/admin',()=>{
//   it('succeeds silently!', ()=> {   // <= No done callback
//     chai.request('http://localhost:3000')
//     .get('/')
//     .end(function(err, res) {
//       expect(res).to.have.status(200);    // <= Test completes before this runs
//     });
//   });
// })

// it('succeeds silently!', function() {   // <= No done callback
//   chai.request('http://localhost:3000')
//   .get('/')
//   .end(function(err, res) {
//     expect(res).to.have.status(200);    // <= Test completes before this runs
//   });
// });

// request(app)
//   .get('/api/admin')
//   .then((res)=> {
//      expect(200)
//   })
//   .catch(function (err) {
//      throw err;
//   });
  
  
  