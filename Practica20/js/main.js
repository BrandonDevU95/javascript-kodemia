const loginButton = document.getElementById('login-button');
const USER_STORAGE = 'user';

loginButton.addEventListener('click', (e) => {
	e.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	const userObject = {
		email,
		password,
	};

	localStorage.setItem(USER_STORAGE, JSON.stringify(userObject));
	getUserSession();
});

const showAlert = (user) => {
	const alert = document.getElementById('welcome');
	const form = document.getElementById('login-form');

	if (user) {
		alert.classList.remove('d-none');
		form.classList.add('d-none');
	} else {
		alert.classList.add('d-none');
		form.classList.remove('d-none');
	}
};

const getUserSession = () => {
	const user = JSON.parse(localStorage.getItem(USER_STORAGE)) || null;
	showAlert(user);
};

getUserSession();
