import db from './../../db';
import { Request, Response } from 'express';

export default async (req: Request, res: Response)=>{
	try{
		const allowCollumns = ['username']
		let stringWithUpdateValues = '';

		for(const column of allowCollumns){
			if(req.body[column]){
				stringWithUpdateValues += ` ${column}='${req.body[column]}' `;
			}
		}

		if(!stringWithUpdateValues){
			res.status(400).send('Nothing to update');
		}

		//@ts-ignore
		let result = await db.users.updateUser(req.session.passport.user, stringWithUpdateValues);// TODO tutaj też z tym passoprt i typami

		if(result){
			res.status(200).send('User updated');
		}else{
			res.status(500).send('Internal error');
		}

	}catch(err){
		res.status(500).send(err);
	}
}