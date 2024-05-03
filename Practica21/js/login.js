const loginBtn = document.getElementById('login-btn');
const token = localStorage.getItem('token');

console.log(token);

token
	? window.open('../views/catalogo.html', '_self')
	: window.open('../views/loginForm.html', '_self');

loginBtn.addEventListener('click', () => {
	let fields = document.querySelectorAll('#login-form input');
	let userObject = {};

	fields.forEach((field) => {
		let property = field.name;
		let value = field.value;

		userObject[property] = value;
	});

	/*Este token debería venir de una base de datos pero lo estamos simulando*/
	let token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

	localStorage.setItem('token', token);
	window.open('../views/catalogo.html', '_self');
	document.getElementById('login-form').reset();
});
