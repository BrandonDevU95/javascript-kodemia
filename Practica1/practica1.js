// Variables
const ordenPrevista = 80;
const numOrdenes = 90;
const diaMes = 6;
const total = resultados(numOrdenes, ordenPrevista, diaMes);

// Función para manejar las órdenes
function resultados(numOrdenes, ordenPrevista, diaMes) {
	let mensaje = '';

	// ¿Incrementar capacidad para mañana? ¿supera monto ordenPrevista?
	if (ordenPrevista < numOrdenes) {
		mensaje =
			'\n El numero de ordenes fue mayor que las previstas, hay que incrementar la capacidad para mañana.';
	} else {
		mensaje =
			'\n El numero de ordenes fue menor o igual a las previstas, mantener la misma capacidad.';
	}

	// ¿Par o impar?
	if (diaMes % 2 !== 0 && numOrdenes > ordenPrevista) {
		mensaje +=
			'\n Hoy es un dia impar. Las ordenes reales superaron las previstas.';
	}

	// Ordenes cumplidas vs monto ordenPrevista.
	const vs = (numOrdenes / ordenPrevista) * 100;
	mensaje += `\n El porcentaje de ordenes cumplidas vs el monto ordenPrevista fue de ${vs.toFixed(
		2
	)}%`;

	return mensaje;
}

console.log(total);
