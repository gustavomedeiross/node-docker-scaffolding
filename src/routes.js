import { Router } from 'express';

import UserController from './app/controllers/UserController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';

const routes = new Router();

routes.get('/', (req, res) => res.json('Hello World'));

routes.post('/users', validateUserStore, UserController);

export default routes;
