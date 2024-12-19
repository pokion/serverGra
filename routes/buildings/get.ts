import db from './../../db';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
	try{
		const { id }: { id: string } = req.body;
		let result;

		if(!id){
			result = await db.items.all();
		}

		if(Array.isArray(id) && id.length > 0){
			result = await db.items.findByArrayIds(id);
		}

		if(!Array.isArray(id) && id){
			result = await db.items.findById(id);
		}

		if(result){
			res.status(200).json(result);
		}else{
			res.status(406).send('Items not found');
		}
	}catch(err){
		res.status(500).send(err);
	}
}