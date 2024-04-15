const canes = [
	{
		nombre: 'Rex',
		tipo: 'Perro',
		edad: 4,
		vacunado: true,
		direccion: {
			calle: 'Calle del Parque',
			numero: 23,
			colonia: 'San José',
			codigoPostal: 78900,
		},
	},
	{
		nombre: 'Bella',
		tipo: 'Perro',
		edad: 6,
		vacunado: true,
		direccion: {
			calle: 'Avenida Libertad',
			numero: 56,
			colonia: 'El Bosque',
			codigoPostal: 78500,
		},
	},
	{
		nombre: 'Max',
		tipo: 'Perro',
		edad: 3,
		vacunado: false,
		direccion: {
			calle: 'Callejón del Puente',
			numero: 12,
			colonia: 'Villa Hermosa',
			codigoPostal: 78850,
		},
	},
	{
		nombre: 'Rocky',
		tipo: 'Perro',
		edad: 2,
		vacunado: false,
		direccion: {
			calle: 'Camino Real',
			numero: 34,
			colonia: 'Las Palmas',
			codigoPostal: 78600,
		},
	},
];

/* 1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos ) */

const obtenerEdadPerruna = (canes) => {
	canes.forEach((cane) => {
		cane.edad *= 7;
		console.log(`${cane.nombre} tiene ${cane.edad} años perrunos`);
	});
};

obtenerEdadPerruna(canes);

/* 2.- Necesitamos conocer la cantidad de canes que ya estan vacunados */
const obtenerCantidadVacunados = (canes) => {
	let vacunados = 0;
	canes.forEach((cane) => {
		if (cane.vacunado) {
			console.log(`${cane.nombre} ya está vacunado`);
			vacunados++;
		}
	});
	return vacunados;
};

console.log(`Hay ${obtenerCantidadVacunados(canes)} canes vacunados`);

/* 3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
    "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "*/

const obtenerListaPerros = (canes) => {
	canes.forEach((cane) => {
		console.log(
			`${cane.nombre}: ${cane.direccion.calle} #${cane.direccion.numero}, ${cane.direccion.colonia}, ${cane.direccion.codigoPostal}`
		);
	});
};

obtenerListaPerros(canes);

/* 4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista */

const obtenerEdadPromedio = (canes) => {
	let total = 0;
	canes.forEach((cane) => {
		total += cane.edad;
	});
	return total / canes.length;
};

console.log(
	`La edad promedio de los canes es de ${obtenerEdadPromedio(
		canes
	)} años humanos`
);

/* 5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No") */
const canesVacunados = canes.map((cane) => {
	cane.vacunado = cane.vacunado ? 'Si' : 'No';
	return cane;
});

console.log(canesVacunados);

/* 6.- Necesitamos una nueva lista con únicamente el nombre de cada can */

const obtenerNombres = canes.map((cane) => cane.nombre);

console.log(obtenerNombres);