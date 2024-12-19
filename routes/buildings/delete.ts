import db from './../../db';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
	try{
		const { id }: { id: string } = req.body;

		if(!id){
			res.status(401).send('Id is required');
			return 0;
		}

		let result = await db.items.remove(id);

		if(result){
			res.status(200).send('Item removed');
		}else{
			res.status(406).send('Item not removed');
		}
	}catch(err){
		res.status(500).send(err);
	}
}