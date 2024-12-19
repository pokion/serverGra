import checkSession from './../../utils/checkSession';
import express from 'express';

const buildings = express.Router();

import create from './create';
import get from './get';
import deleteItem from './delete';
import update from './update';

buildings.put('/', checkSession, create);
buildings.get('/', checkSession, get);
buildings.delete('/', checkSession, deleteItem);
buildings.patch('/', checkSession, update);

module.exports = buildings;