import { Item } from "../types/Item";
import conn from "./connection";

async function all(){
	return await conn<Item>('SELECT * FROM items');
}

async function add(name: string, description: string){
	return await conn<Item>(`
			INSERT INTO items (name, description)
			VALUES (?,?)
	`, [name, description]);
}

async function remove(id: string){
	return await conn<Item>('DELETE FROM items WHERE id=?', [id]);
}

async function findById(id: string){
	return await conn<Item>('SELECT * FROM items WHERE id=?',[id]);
}

async function findByArrayIds(ArrayIds: string[]){
	return await conn<Item>('SELECT * FROM items WHERE id IN (?)', ArrayIds);
}

async function updateItem(id: string, valuesToUpdate: string){
	return await conn<Item>('UPDATE items SET '+valuesToUpdate+' WHERE id=?',[id]);
}

export default {
	all,
	add,
	remove,
	findById,
	findByArrayIds,
	updateItem
}