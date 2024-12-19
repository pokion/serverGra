import db from './../../db';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
	try{
		const { id }: { id: string } = req.body;//tutaj będzie trzeba zmienić żeby usuwało za jakiś czas albo wysyłało maila do potwierdzenia usunięcia :)

		if(!id){
			res.status(401).send('Id is required');
			return 0;
		}

		let result = await db.users.remove(id);

		if(result){
			res.status(200).send('User removed');
		}else{
			res.status(406).send('User not removed');
		}
		
	}catch(err){
		res.status(500).send(err);
	}
}