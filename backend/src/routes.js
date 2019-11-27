import express from 'express';
import AuthController from './app/controller/AuthController';

const routes = express.Router();

routes.post('/auth', AuthController.store);

export default routes;
