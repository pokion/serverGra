import db from './../../db';
import { Request, Response } from 'express';

export default async (req: Request, res: Response)=>{
	try{
		const { id }: { id: string } = req.body;
		const allowCollumns = ['name', 'description']
		let stringWithUpdateValues = '';
		let arrayToPopulateString = [];

		if(!id){
			res.status(401).send('Id is required');
			return 0;
		}

		for(const column of allowCollumns){
			if(req.body[column]){
				arrayToPopulateString.push(` ${column}='${req.body[column]}' `);
			}
		}

		if(arrayToPopulateString.length > 0){
			stringWithUpdateValues = arrayToPopulateString.join(',')
		}

		if(!stringWithUpdateValues){
			res.status(400).send('Nothing to update');
		}

		let result = await db.items.updateItem(id, stringWithUpdateValues);

		if(result){
			res.status(200).send('Item updated');
		}else{
			res.status(500).send('Internal error');
		}

	}catch(err){
		res.status(500).send(err);
	}
}