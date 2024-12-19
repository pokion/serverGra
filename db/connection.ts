import mysql, { RowDataPacket } from 'mysql2/promise';

export default async <T extends RowDataPacket>(query: string, values: string[] | boolean = false) =>{
	const connection = await mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DB_NAME
	});
	let result
	try{
		if(values){
			result = await connection.query<T[]>(query, values);
		}else{
			result = await connection.query<T[]>(query);
		}	
	}catch(err){
		console.log('MYSQL ERROR:', err)
		return null;
	}finally{
		await connection.end();
	}
	
	return result[0];
}
