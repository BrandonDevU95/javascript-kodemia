/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

   persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */

  let form = document.getElementById('form');
  let arrayPersons = [];

  form.addEventListener('submit', (event) => {
		event.preventDefault();
		const person = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			password: document.getElementById('password').value,
		};
		arrayPersons.push(person);
		printPersons(arrayPersons);
		form.reset();
  });

  let printPersons = (personsArray) => {
		let personsContainer = document.getElementById('persons-list');
		personsContainer.innerHTML = '';
		personsArray.forEach((person) => {
			let userContainer = document.createElement('div');
			userContainer.classList.add(
				'border',
				'shadow',
				'rounded',
				'p-3',
				'my-3'
			);
			let listName = document.createElement('p');
			listName.classList.add('m-0');
			let textName = document.createTextNode(person.name);
			let listEmail = document.createElement('p');
			listEmail.classList.add('m-0');
			let textEmail = document.createTextNode(person.email);
			let listPassword = document.createElement('p');
			listPassword.classList.add('m-0');
			let textPassword = document.createTextNode(person.password);
			listName.append(textName);
			listEmail.append(textEmail);
			listPassword.append(textPassword);
			userContainer.append(listName, listEmail, listPassword);
			personsContainer.append(userContainer);
		});
  };


// let form = document.getElementById('form');
// let arrayPersons = [];

// form.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const person = {
// 		name: document.getElementById('name').value,
// 		email: document.getElementById('email').value,
// 		password: document.getElementById('password').value,
// 	};
//     arrayPersons.push(person)
//     printPersons({...person})
//     form.reset()
// });

// let printPersons = ({name, email, password}) => {
//     let personsContainer = document.getElementById('persons-list');
//     let userContainer = document.createElement('div')
//     userContainer.classList.add('border', 'shadow', 'rounded', 'p-3', 'my-3');
//     let listName = document.createElement('p');
//     listName.classList.add('m-0')
// 	let textName = document.createTextNode(name);
//     let listEmail = document.createElement('p');
//     listEmail.classList.add('m-0');
// 	let textEmail = document.createTextNode(email);
//     let listPassword = document.createElement('p');
//     listPassword.classList.add('m-0');
// 	let textPassword = document.createTextNode(password);
// 	listName.append(textName);
//     listEmail.append(textEmail);
//     listPassword.append(textPassword);
//     userContainer.append(listName, listEmail, listPassword)
// 	personsContainer.append(userContainer);
// }; 