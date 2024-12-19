import db from './../../db';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
	try{
		const {name, description}: {name: string, description: string} = req.body;
		
		if(!name){
			res.status(401).send('Name is required');
			return 0;
		}

		let result = await db.items.add(name, (description) ? description : '');

		if(result){
			res.status(201).send('Item added');
		}else{
			res.status(406).send('Item not added');
		}
	}catch(err){
		res.status(500).send(err);
	}
}