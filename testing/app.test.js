const request = require('supertest');
require('dotenv').config();
const app = require('../app');

describe('Unit Test /', () => {
  it('should respond with index.html', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('Unit Test /app1', () => {
  it('should respond with "Hello this Apps 1!"', async () => {
    const response = await request(app).get('/app1');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello this Apps 1!');
  });
});

describe('Unit Test /app2', () => {
  it('should respond with "Hello this App 2!"', async () => {
    const response = await request(app).get('/app2');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello this App 2!');
  });
});

describe('Integration Test Connect Database', () => {
  it('should respond with users data', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});
