import conn from "./connection";

async function all(){
	return await conn<Express.User>('SELECT * FROM users');
}

async function add(username: string, password: string){
	return await conn<Express.User>(`
			INSERT INTO users (username, hashed_password)
			VALUES (?,?)
	`, [username, password]);
}

async function remove(id: string){
	return await conn<Express.User>('DELETE FROM users WHERE id=?', [id]);
}

async function findById(id: string){
	return await conn<Express.User>('SELECT * FROM users WHERE id=?',[id]);
}

async function findByUsername(username: string){
	return await conn<Express.User>('SELECT * FROM users WHERE username=?',[username]);
}

async function updateUser(id: string, valuesToUpdate: string){
	return await conn<Express.User>('UPDATE users SET '+valuesToUpdate+' WHERE id=?',[id]);
}

export default {
	all,
	add,
	remove,
	findById,
	findByUsername,
	updateUser
}