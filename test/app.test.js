const request = require('supertest');
const app = require('../src/app');
const server = app.listen(0); // Start server on a random port

describe('GET /', () => {
  it('should return Hello GitHub Actions!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello GitHub Actions!');
  });

  afterAll(() => {
    server.close(); // Close the server after tests
  });
});
