import db from './../../db';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

export default async (req: Request, res: Response) => {
	try{
		const { username, password }: { username: string, password: string} = req.body;

		if(!(username && password)){
			res.status(401).send('All inputs are required');
			return 0;
		}

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		let result = await db.users.add(username, hash);

		if(result){
			res.status(201).send('User added');
		}else{
			res.status(406).send('User not added');
		}
	}catch(err){
		res.status(500).send(err);
	}
}