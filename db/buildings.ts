import conn from './connection';

async function all(){
	return await conn('SELECT * FROM buildings');
}

async function add(name: string, description: string){
	return await conn(`
			INSERT INTO buildings (name, description)
			VALUES (?,?)
	`, [name, description]);
}

async function remove(id: string){
	return await conn('DELETE FROM buildings WHERE id=?', [id]);
}

async function findById(id: string){
	return await conn('SELECT * FROM buildings WHERE id=?',[id]);
}

async function findByArrayIds(ArrayIds: string[]){
	return await conn('SELECT * FROM buildings WHERE id IN (?)', ArrayIds);
}

async function updateItem(id: string, valuesToUpdate: string){
	return await conn('UPDATE buildings SET '+valuesToUpdate+' WHERE id=?',[id]);
}

export default {
	all,
	add,
	remove,
	findById,
	findByArrayIds,
	updateItem
}