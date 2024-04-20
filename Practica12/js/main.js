let koders = [
    {
        name: "Juan",
        lastName: "Perez"
    },
    {
        name: "Pedro",
        lastName: "Gomez"
    },
    {
        name: "Maria",
        lastName: "Hernandez"
    },
    {
        name: "Luis",
        lastName: "Garcia"
    },
    {
        name: "Ana",
        lastName: "Lopez"
    }
]
let listado = document.createElement('ol');
listado.classList.add('list-group');

const creatNewElementeList = (alumno) => {
    let elemento = document.createElement('li');
    elemento.classList.add('list-group-item');
    let textoDelElemento = document.createTextNode(
        `${alumno.name} ${alumno.lastName}`
    );
    elemento.append(textoDelElemento);

    return elemento;
};

koders.forEach((koder) => {
    let alumno = creatNewElementeList(koder);
    listado.append(alumno);
});

let divDeListado = document.getElementById('cardWrapper');
divDeListado.classList.add('card');
divDeListado.classList.add('p-3');
divDeListado.append(listado);