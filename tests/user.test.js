const request = require('supertest')
const app = require('../app')
const User = require('../db/models/user')

beforeEach(async() => {
    await User.deleteMany()
})

test('Should sign up for a user', async () => {
    await request(app).post('/api/users/register')
    .send({
        username: 'olga',
        displayName: 'Olga',
        password: 'test123'
    })
    .expect(201)
})