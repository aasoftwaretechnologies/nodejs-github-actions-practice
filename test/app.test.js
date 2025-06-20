const request = require('supertest');
const app = require('../src/app');

let server;

beforeAll((done) => {
  server = app.listen(() => {
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    done();
  });
});

describe('GET /', () => {
  it('should return Hello GitHub Actions!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello GitHub Actions!');
  });
});
