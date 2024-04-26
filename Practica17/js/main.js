const createKoderButton = document.getElementById('create-koder');
const db = 'https://kodemia-f0d4c-default-rtdb.firebaseio.com/koders/.json';


const getKoders = async () => {
	let response = await fetch(db);
	let koders = await response.json();

	let keys = Object.keys(koders);

	let kodersArray = keys.map((key) => {
		return { ...koders[key], key };
	});

	return kodersArray;
};

const postKoder = async (koderObject) => {
	let response = await fetch(db, {
		method: 'POST',
		body: JSON.stringify(koderObject),
	});
	let data = await response.json();
	console.log(data)

	if(data) printKodersList('koders-list');
	else console.error('Error al crear el koder');
};

const createKoderList = (koder) => {
	const koderContainer = document.createElement('div');
	koderContainer.classList.add('border', 'shadow', 'rounded', 'p-3', 'my-2');

	const listKey = document.createElement('p');
	listKey.classList.add('m-0');

	const listID = document.createElement('span');
	listID.classList.add('fw-light', 'fst-italic');
	const spanID = document.createTextNode(koder.key);
	listID.append(spanID);

	const textKey = document.createTextNode(`ID: `);

	const listFullName = document.createElement('p');
	listFullName.classList.add('m-0');
	const textFullName = document.createTextNode(
		`Nombre: ${koder.name} ${koder.lastname}`
	);

	const listEmail = document.createElement('p');
	listEmail.classList.add('m-0');
	const textEmail = document.createTextNode(`Email: ${koder.email}`);

	listKey.append(textKey, listID);
	listFullName.append(textFullName);
	listEmail.append(textEmail);

	koderContainer.append(listKey, listFullName, listEmail);

	return koderContainer;
};

const printKodersList = async (wrapperId) => {
	const dataArray = await getKoders();
	const wrapper = document.getElementById(wrapperId);

	while (wrapper.firstChild) {
		wrapper.removeChild(wrapper.firstChild);
	}

	dataArray.forEach((koder) => wrapper.append(createKoderList(koder)));
};

createKoderButton.addEventListener('click', (e) => {
	e.preventDefault();
	let koderObject = {};
	const fields = document.querySelectorAll('#koders-form input');

	fields.forEach((field) => {
		const property = field.name;
		const value = field.value;
		koderObject[property] = value;
	});

	postKoder(koderObject);
});

printKodersList('koders-list');
