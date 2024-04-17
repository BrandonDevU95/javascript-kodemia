let data = [
	['Israel', 'Salinas', 34],
	['Charles', 'Silva', 27],
	['Naomi', 'Lopez', 27],
	['David', 'Moranchel', 28],
];

// 1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
// const getFullNames = (data) => {
// 	let fullNames = data.map((person) => `${person[0]} ${person[1]}`);
// 	return fullNames;
// };

// console.log(getFullNames(data));

// 2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista

const getMinMaxAge = (data) => {

	let minAge = data.reduce(
		(min, person) => (person[2] < min ? person[2] : min),
		data[0][2]
	);
	let maxAge = data.reduce(
		(max, person) => (person[2] > max ? person[2] : max),
		data[0][2]
	);
	return { minAge, maxAge };
};

console.log(getMinMaxAge(data));

// 3.- Necesitamos reestructurar la data para que quede de la siguiente forma:

// let restructuredData = [
//     {
//         name:
//         lastname:
//         age
//     }
// ]
