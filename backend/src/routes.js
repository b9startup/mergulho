import express from 'express';
import SignUpController from './app/controller/SignUpController';
import SignInController from './app/controller/SignInController';

const routes = express.Router();

routes.post('/signup', SignUpController.store);
routes.post('/signin', SignInController.store);

export default routes;
