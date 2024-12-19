require('dotenv').config()
import express from 'express';
import session from 'express-session';
import mySqlStoreImport from 'express-mysql-session';
import passport from 'passport';
import routes from './routes';
import './strategies/localStrategy';

// @ts-expect-error
const mySqlStore = mySqlStoreImport(session);//TODO tu jest jakiś błąd z session jakieś typy czy coś idk
const port = 3000;
const app = express();
const optionsMySQL = {
		host: process.env.DB_HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DB_NAME
	}

app.use(session({
	// @ts-expect-error
	secret: process.env.SESSION_SECRET,//TODO tutaj coś płacze że typy są złe xDD idk jak 
	saveUninitialized: true,
	resave: false,
	cookie: {
		maxAge: 60000*60
	},
	store: new mySqlStore(optionsMySQL)
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes)

app.listen(port);

console.log(`Api started on port ${port}`);