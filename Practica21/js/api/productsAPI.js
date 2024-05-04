import { seed } from '../seedDB.js';

const PRODUCTS_BASE_URL =
	'https://kodemia-products-store-default-rtdb.firebaseio.com/products';

const createDB = () => {
	seed.forEach(async (product) => {
		await createProduct(product);
	});
	console.log('Success DB');
};

const verifyDB = async () => {
	let response = await fetch(`${PRODUCTS_BASE_URL}/.json`);
	let data = await response.json();
	return data;
};

const createProduct = async (petObject) => {
	let response = await fetch(`${PRODUCTS_BASE_URL}/.json`, {
		method: 'POST',
		body: JSON.stringify(petObject),
	});
	let data = await response.json();
	return data;
};

const getProductById = async (petKey) => {
	let response = await fetch(`${PRODUCTS_BASE_URL}/${petKey}/.json`);
	let data = await response.json();
	return data;
};

const getAllProducts = async () => {
	let response = await fetch(`${PRODUCTS_BASE_URL}/.json`);
	let data = await response.json();

	if (!data) return null;

	let keys = Object.keys(data);
	let petsArray = keys.map((key) => ({ ...data[key], key }));
	return petsArray;
};

export { createDB, verifyDB, createProduct, getProductById, getAllProducts };
