import express from "express";
import bodyParser from "body-parser";
import users from "./users";
import items from "./items";

const routes = express.Router();

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

//simple logging system
routes.use((req, res, next) => {
	console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
	next();
})

routes.use('/user', users);
routes.use('/items', items);

export default routes;