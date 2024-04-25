let createPersonButton = document.getElementById('create-product');

let products = [];

createPersonButton.addEventListener('click', (event) => {
	event.preventDefault();
	let fields = document.querySelectorAll('#product-form input');
	let productObject = {};

	fields.forEach((field) => {
		let property = field.name;
		let value = field.value;

		productObject[property] = value;
	});

	products.push(productObject);

	console.log(products);

	printProductList(products, 'products-list');
});

const createProductCard = (productObject) => {
	let { name, description, price, image } = productObject;
	let productContainerItem = document.createElement('div');
	productContainerItem.classList.add('col-12','col-md-6', 'col-lg-6', 'pb-3');

	let productListItem = document.createElement('div');
	productListItem.classList.add('card', 'card-width');
	let productImage = document.createElement('img');
	productImage.setAttribute('src', image);
	productImage.setAttribute('alt', name);
	productImage.classList.add('card-img-top');
	productListItem.append(productImage);

	let productCardBody = document.createElement('div');
	productCardBody.classList.add('card-body');
	let productTitleBody = document.createElement('h5');
	productTitleBody.classList.add('card-title');
	let productTitleText = document.createTextNode(name);
	productTitleBody.append(productTitleText); //Insertar en body

	let productDescriptionBody = document.createElement('p');
	productDescriptionBody.classList.add('card-text');
	const cuttedDescription = cutDescription(description);
	let productDescriptionText = document.createTextNode(cuttedDescription);
	productDescriptionBody.append(productDescriptionText); //Insertar en body

	let productPrice = document.createElement('p');
	productPrice.classList.add('fw-bold');
	let priceText = document.createTextNode(`$${price}MXN`);
	productPrice.append(priceText); //Insertar en Body

	productCardBody.append(
		productTitleBody,
		productDescriptionBody,
		productPrice
	);

	productListItem.append(productCardBody);
	productContainerItem.append(productListItem);

	return productContainerItem;
};

const printProductList = (dataArray, wrapperId) => {
	let wrapper = document.getElementById(wrapperId);

	while (wrapper.firstChild) {
		wrapper.removeChild(wrapper.firstChild);
	}

	dataArray.forEach((product) => wrapper.append(createProductCard(product)));
};

const cutDescription = (description) => {
	const words = description.split(' ');
	if (words.length > 10) {
		return words.slice(0, 10).join(' ') + '...';
	} else {
		return description;
	}
}