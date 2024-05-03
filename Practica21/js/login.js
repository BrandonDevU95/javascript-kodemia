const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
	let fields = document.querySelectorAll('#login-form input');
	let userObject = {};

	fields.forEach((field) => {
		let property = field.name;
		let value = field.value;

		userObject[property] = value;
	});

	console.log(userObject);
	document.getElementById('login-form').reset();
});
