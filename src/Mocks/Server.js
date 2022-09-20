import { setupServer } from 'msw/node';
import { Handlers } from './Handlers';

export const server = setupServer(...Handlers);