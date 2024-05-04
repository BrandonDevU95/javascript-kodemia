import { getProductById } from '../js/api/productsAPI.js';
const url = window.location.href;
const params = new URLSearchParams(new URL(url).search);
const wrapperId = document.getElementById('detail-card');

const id = params.get('id');

const productDetalCard = (product) => {
	const {
		category,
		description,
		image,
		price,
		rating: { rate, count },
		title,
	} = product;

	const cardContainer = document.createElement('div');
	cardContainer.classList.add('row', 'justify-content-center', 'mb-3');

	const cardCol = document.createElement('div');
	cardCol.classList.add('col-md-12', 'col-xl-10');

	const card = document.createElement('div');
	card.classList.add(
		'card',
		'shadow-0',
		'border',
		'rounded-3',
		'bg-dark',
		'text-white'
	);

	const cardBody = document.createElement('div');
	cardBody.classList.add('card-body');

	const row = document.createElement('div');
	row.classList.add('row');

	const imageCol = document.createElement('div');
	imageCol.classList.add(
		'col-md-12',
		'col-lg-3',
		'col-xl-3',
		'mb-4',
		'mb-lg-0'
	);

	const imageContainer = document.createElement('div');
	imageContainer.classList.add(
		'bg-image',
		'hover-zoom',
		'ripple',
		'rounded',
		'ripple-surface'
	);

	const productImage = document.createElement('img');
	productImage.src = image;
	productImage.classList.add('w-100');

	imageContainer.appendChild(productImage);
	imageCol.appendChild(imageContainer);

	const detailsCol = document.createElement('div');
	detailsCol.classList.add('col-md-6', 'col-lg-6', 'col-xl-6');

	const productTitle = document.createElement('h5');
	productTitle.textContent = title;

	const ratingContainer = document.createElement('div');
	ratingContainer.classList.add('d-flex', 'flex-row', 'align-items-center');

	const starContainer = document.createElement('div');
	starContainer.classList.add('text-danger', 'mb-1', 'me-2');

	for (let i = 0; i < Math.floor(rate); i++) {
		const star = document.createElement('svg');
		star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		star.setAttribute('width', '16');
		star.setAttribute('height', '16');
		star.setAttribute('fill', 'currentColor');
		star.setAttribute('class', 'bi bi-star-fill');
		star.setAttribute('viewBox', '0 0 16 16');

		const path = document.createElement('path');
		path.setAttribute(
			'd',
			'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
		);

		star.appendChild(path);
		starContainer.appendChild(star);
	}

	const ratingCount = document.createElement('span');
	ratingCount.textContent = count;

	ratingContainer.appendChild(starContainer);
	ratingContainer.appendChild(ratingCount);

	const categoryParagraph = document.createElement('p');
	categoryParagraph.classList.add('mt-1', 'mb-0', 'small');
	categoryParagraph.innerHTML = `<p class="fs-5 fw-light fst-italic">${category}</p>`;

	const descriptionParagraph = document.createElement('p');
	descriptionParagraph.classList.add('mb-4', 'mb-md-0');
	descriptionParagraph.textContent = description;

	detailsCol.appendChild(productTitle);
	detailsCol.appendChild(ratingContainer);
	detailsCol.appendChild(categoryParagraph);
	detailsCol.appendChild(descriptionParagraph);

	const priceCol = document.createElement('div');
	priceCol.classList.add(
		'col-md-6',
		'col-lg-3',
		'col-xl-3',
		'border-sm-start-none',
		'border-start'
	);

	const priceContainer = document.createElement('div');
	priceContainer.classList.add(
		'd-flex',
		'flex-row',
		'align-items-center',
		'mb-1'
	);

	const priceTag = document.createElement('h4');
	priceTag.classList.add('mb-1', 'me-1');
	priceTag.textContent = `$${price}`;

	const discountedPrice = document.createElement('span');
	discountedPrice.classList.add('text-danger');
	discountedPrice.innerHTML = `<s>$${(price + 2.99).toFixed(2)}</s>`;

	priceContainer.appendChild(priceTag);
	priceContainer.appendChild(discountedPrice);

	const freeShipping = document.createElement('h6');
	freeShipping.classList.add('text-success');
	freeShipping.textContent = 'Envio gratis';

	const buttonContainer = document.createElement('div');
	buttonContainer.classList.add('d-flex', 'flex-column', 'mt-4');

	const buyNowButton = document.createElement('button');
	buyNowButton.setAttribute('data-mdb-button-init', '');
	buyNowButton.setAttribute('data-mdb-ripple-init', '');
	buyNowButton.classList.add('btn', 'btn-primary', 'btn-sm');
	buyNowButton.setAttribute('type', 'button');
	buyNowButton.textContent = 'Comprar Ahora';

	const addToCartButton = document.createElement('button');
	addToCartButton.setAttribute('data-mdb-button-init', '');
	addToCartButton.setAttribute('data-mdb-ripple-init', '');
	addToCartButton.classList.add(
		'btn',
		'btn-outline-primary',
		'btn-sm',
		'mt-2'
	);
	addToCartButton.setAttribute('type', 'button');
	addToCartButton.textContent = 'Agregar al carrito';

	buttonContainer.appendChild(buyNowButton);
	buttonContainer.appendChild(addToCartButton);

	priceCol.appendChild(priceContainer);
	priceCol.appendChild(freeShipping);
	priceCol.appendChild(buttonContainer);

	row.appendChild(imageCol);
	row.appendChild(detailsCol);
	row.appendChild(priceCol);

	cardBody.appendChild(row);
	card.appendChild(cardBody);
	cardCol.appendChild(card);
	cardContainer.appendChild(cardCol);

	return cardContainer;
};

const printProductDetail = async (id) => {
	const product = await getProductById(id);
	const card = productDetalCard(product);
	wrapperId.appendChild(card);
};

printProductDetail(id);
