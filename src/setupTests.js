import '@testing-library/jest-dom';

// msw should not be deployed in production build
if (process.env.NODE_ENV === 'test') {
    const { server } = require('./Mocks/Server.js');
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());
}