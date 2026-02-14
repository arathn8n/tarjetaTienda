let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidad = document.querySelector(".cantidad");
let sumaBtn = document.querySelector('.sumar');
let restarBtn = document.querySelector('.restar');
let valorTotal = document.querySelector('.valor-total');

let contador = 0;

function actualizacionTotal(){
    valorTotal.innerHTML = contador * precio;
}

sumaBtn.addEventListener('click', function(){
    contador++;
    cantidad.innerHTML = contador;
    actualizacionTotal();
});