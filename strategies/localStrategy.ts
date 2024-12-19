import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from 'bcryptjs';
import db from '../db';

passport.serializeUser((user, done)=>{
	done(null, user.id);
});

passport.deserializeUser(async (id: string, done)=>{
	try{
		const user = await db.users.findById(id);
		if(!user) throw new Error('User not found');
		done(null, user[0]);
	}catch(err){
		done(err, null);
	}
});

export default passport.use(new Strategy(async (username, password, done)=>{
	try{
		const user = await db.users.findByUsername(username);
		if(!user || user.length < 1) throw new Error('User not found');
		if(!bcrypt.compareSync(password, user[0].hashed_password.toString())) throw new Error('Bad credentials');
		done(null, user[0]);
	}catch(err){
		done(err, false);
	}
}))
