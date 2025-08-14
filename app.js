// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let nombre = '';

function agregarAmigo(){
    if(document.querySelector("#amigo").value !== ""){
        nombre = document.querySelector("#amigo").value;
        nombresAmigos.push(nombre);
        limpiarCaja();
        listaAmigos();
        document.querySelector('#resultado').innerHTML = '';
        console.log(nombresAmigos);
    }
    else{
        alert("Por favor, inserte un nombre.");
    }
    return;
}

function listaAmigos(){
    let lista = document.querySelector("#listaAmigos");
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = '';
    // Recorrer el arreglo y crear un <li> por cada nombre
    for (let i = 0; i < nombresAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = nombresAmigos[i];
        lista.append(item);
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}

function sortearAmigo(){
    let numeroGenerado = Math.floor(Math.random()*nombresAmigos.length);
    let amigoSorteado = document.querySelector("#resultado");
    amigoSorteado.innerHTML = `El amigo secreto sorteado es ${nombresAmigos[numeroGenerado]}`;
    document.querySelector("#listaAmigos").innerHTML = '';
    nombresAmigos = [];
    return;
}


