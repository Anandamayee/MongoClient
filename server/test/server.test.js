// const supertest = require('supertest');
// const expect = require('supertest');

// const { app } = require('./../server');
// const { UserDetails } = require('./../models/user');

// describe('POST/addUser', () => {
//     it('should create new user', (done) => {
//         var text = 'User details';
//         request(app)
//             .post('/addUser')
//             .send({ text })
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body).toBe(done);
//             })
//             .end((err,res)=>{
//                 if(err){
//                     return done(err)
//                 }
//                 UserDetails.find().then((user)=>{
//                     expect(user.length).toBe()
//                 })
//             });
//     })
// })