import { createDB, verifyDB } from './api/productsAPI.js';

//crea una funcion anonima autoejecutable para cargar la DB
(async () => {
	const products = await verifyDB();
	if (!products) createDB();
})();
