const wrapper = document.getElementById('posts-list');
let createPersonButton = document.getElementById('create-product');
const db = 'https://kodemia-blog-935ba-default-rtdb.firebaseio.com/blog/.json';

createPersonButton.addEventListener('click', (event) => {
	event.preventDefault();
	let fields = document.querySelectorAll('#product-form input');
	let postObject = {};

	fields.forEach((field) => {
		let property = field.name;
		let value = field.value;

		postObject[property] = value;
	});

	postPosts(postObject);
});

const createPost = (post) => {
	let card = document.createElement('div');
	card.classList.add('card', 'p-0', 'mb-3');

	let cardHeader = document.createElement('div');
	cardHeader.classList.add('card-header');
	cardHeader.textContent = post.title;

	let cardBody = document.createElement('div');
	cardBody.classList.add('card-body');

	let blockquote = document.createElement('blockquote');
	blockquote.classList.add('blockquote', 'mb-0');

	let paragraph = document.createElement('p');
	paragraph.textContent = post.content;

	let footer = document.createElement('footer');
	footer.classList.add('blockquote-footer');
	footer.textContent = post.author;

	blockquote.append(paragraph, footer);
	cardBody.appendChild(blockquote);

	card.append(cardHeader, cardBody);

	return card;
};

const noPosts = () => {
	const noPosts = document.createElement('div');
	noPosts.classList.add('alert', 'alert-primary');
	noPosts.setAttribute('role', 'alert');
	noPosts.textContent = 'Se el primero en crear post! :D';

	return noPosts;
};

const printPostsList = async () => {
	const dataArray = await getPosts();

	if (!dataArray) {
		wrapper.append(noPosts());
		return;
	}

	while (wrapper.firstChild) {
		wrapper.removeChild(wrapper.firstChild);
	}

	dataArray.forEach((post) => {
		const postElement = createPost(post);
		wrapper.append(postElement);
	});
};

const getPosts = async () => {
	const response = await fetch(db);
	const posts = await response.json();

	if (!posts) return null;

	const keys = Object.keys(posts);

	const postsArray = keys.map((key) => ({
		...posts[key],
		key,
	}));

	return postsArray;
};

const postPosts = async (postObject) => {
	const response = await fetch(db, {
		method: 'POST',
		body: JSON.stringify(postObject),
	});
	const data = await response.json();

	if (data) {
		printPostsList();
	} else {
		console.error('Error al crear el koder');
	}
};

printPostsList();
