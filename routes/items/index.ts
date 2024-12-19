import express from 'express';
import checkSession from './../../utils/checkSession';

const items = express.Router();

import create from './create';
import get from './get';
import deleteItem from './delete';
import update from './update';

items.put('/', checkSession, create);
items.get('/', checkSession, get);
items.delete('/', checkSession, deleteItem);
items.patch('/', checkSession, update);

export default items;