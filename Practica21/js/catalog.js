import { getAllProducts } from '../js/api/productsAPI.js';
const wrapperId = document.getElementById('list-products');

const createProductCard = (productObject) => {
	const { title, image, price, key } = productObject;
	const colDiv = document.createElement('div');
	colDiv.classList.add('col');

	const anchor = document.createElement('a');
	anchor.setAttribute('href', `../views/details.html?productKey=${key}`);
	anchor.classList.add('text-decoration-none');

	const cardDiv = document.createElement('div');
	cardDiv.classList.add(
		'card',
		'h-100',
		'border-dark-subtle',
		'overflow-hidden'
	);

	const img = document.createElement('img');
	img.setAttribute('src', image);
	img.classList.add('card-img-top', 'object-fit-contain');
	img.setAttribute('alt', title);
	img.setAttribute('height', '250');

	const cardBodyDiv = document.createElement('div');
	cardBodyDiv.classList.add(
		'card-body',
		'bg-dark',
		'text-white',
		'd-flex',
		'flex-column',
		'justify-content-between'
	);

	const cardTitle = document.createElement('h5');
	cardTitle.classList.add('card-title');
	cardTitle.textContent = title;

	const cardText = document.createElement('span');
	cardText.classList.add(
		'card-text',
		'fw-bold',
		'fs-5',
		'text-success',
		'text-end'
	);
	cardText.textContent = `$${price}`;

	cardBodyDiv.appendChild(cardTitle);
	cardBodyDiv.appendChild(cardText);

	cardDiv.appendChild(img);
	cardDiv.appendChild(cardBodyDiv);

	anchor.appendChild(cardDiv);
	colDiv.appendChild(anchor);

	return colDiv;
};

const printProducts = (productsArray, wrapperId) => {
	while (wrapperId.firstChild) {
		wrapperId.removeChild(wrapperId.firstChild);
	}

	productsArray.forEach((product) => {
		const productCard = createProductCard(product);
		wrapperId.appendChild(productCard);
	});
};

const printNoProducts = (wrapperId) => {
	const noProducts = document.createElement('div');
	noProducts.classList.add('alert', 'alert-primary');
	noProducts.setAttribute('role', 'alert');
	noProducts.textContent = 'No hay productos disponibles!';

	wrapperId.appendChild(noProducts);
};

const printProductsList = async () => {
	const productsArray = await getAllProducts();

	if (!productsArray) {
		printNoProducts(wrapperId);
		return;
	}

	printProducts(productsArray, wrapperId);
};

printProductsList();
