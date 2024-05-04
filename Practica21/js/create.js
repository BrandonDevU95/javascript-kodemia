import { createProduct } from './api/productsAPI.js';
const addProduct = document.getElementById('add-product-btn');

addProduct.addEventListener('click', async () => {
	let fields = document.querySelectorAll('#add-product-form input');
	let product = {};

	fields.forEach((field) => {
		const { name, value } = field;
		product[name] = value;
	});

	const productObject = {
		title: product.title,
		price: parseInt(product.price),
		description: product.description,
		category: product.category,
		image: product.image,
		rating: {
			rate: parseFloat(product.rate),
			count: parseInt(product.count),
		},
	};

	const data = await createProduct(productObject);

	if (data) {
		const divAlert = document.getElementById('product-created');
		const alert = document.createElement('div');
		alert.classList.add('alert', 'alert-success');
		alert.setAttribute('role', 'alert');
		alert.innerHTML = 'Producto creado correctamente';

		divAlert.appendChild(alert);
	} else {
		console.log('Error al crear el producto');
	}
});
