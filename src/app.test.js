const supertest = require('supertest');

const { app } = require('./app');

describe('jest when using superagent', () => {
    let agent;

    beforeEach(() => {
        agent = supertest(app);
    });

    it('should be hello world', async () => {
        const res = await agent.get('/');
        expect(res.status).toBe(200);
        expect(res.text).toBe('Hello world!');
    });
});
