import express from 'express';
import passport from 'passport';
import checkSession from './../../utils/checkSession';

const users = express.Router();

import register from './register';
import login from './login';
import update from './update';
import deleteUser from './delete';

users.put('/', register);
users.post('/', passport.authenticate('local'), login);
users.patch('/', checkSession, update);
users.delete('/', checkSession, deleteUser);

export default users;