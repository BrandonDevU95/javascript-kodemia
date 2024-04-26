const wrapper = document.getElementById('koders-list');
const createKoderButton = document.getElementById('create-koder');
const db = 'https://kodemia-f0d4c-default-rtdb.firebaseio.com/koders/.json';

const getKoders = async () => {
	const response = await fetch(db);
	const koders = await response.json();

	const keys = Object.keys(koders);

	const kodersArray = keys.map((key) => ({
		...koders[key],
		key
	}));

	return kodersArray;
};

const postKoder = async (koderObject) => {
	const response = await fetch(db, {
		method: 'POST',
		body: JSON.stringify(koderObject),
	});
	const data = await response.json();

	if (data) {
		printKodersList();
	} else {
		console.error('Error al crear el koder');
	}
};

const createKoderList = (koder) => {
	const koderContainer = document.createElement('div');
	koderContainer.classList.add('border', 'shadow', 'rounded', 'p-3', 'my-3');

	const listKey = document.createElement('p');
	listKey.classList.add('m-0');

	const listID = document.createElement('span');
	listID.classList.add('fw-light', 'fst-italic');
	listID.textContent = koder.key;

	const textKey = document.createTextNode('ID: ');

	const listFullName = document.createElement('p');
	listFullName.classList.add('m-0');
	listFullName.textContent = `Nombre: ${koder.name} ${koder.lastname}`;

	const listEmail = document.createElement('p');
	listEmail.classList.add('m-0');
	listEmail.textContent = `Email: ${koder.email}`;

	listKey.append(textKey, listID);
	koderContainer.append(listKey, listFullName, listEmail);

	return koderContainer;
};

const printKodersList = async () => {
	const dataArray = await getKoders();

	while (wrapper.firstChild) {
		wrapper.removeChild(wrapper.firstChild);
	}

	dataArray.forEach((koder) => {
		const koderElement = createKoderList(koder);
		wrapper.append(koderElement);
	});
};

createKoderButton.addEventListener('click', (e) => {
	e.preventDefault();
	const fields = document.querySelectorAll('#koders-form input');
	const koderObject = {};

	fields.forEach((field) => {
		const { name, value } = field;
		koderObject[name] = value;
	});

	postKoder(koderObject);
});

printKodersList();
