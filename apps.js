//como agregar topping nuevo desde el DOM:
const listaDeToppings = document.getElementById('lista-toppings'); //ubicamos sobre que nodo vamos a trabajar
const toppingNuevo = document.createElement('li');//creamos el elemento que necesitamos
toppingNuevo.classList.add('topping', 'fondo-marron'); //le agregamos las clasees a utilizar
toppingNuevo.innerText = 'Queso Extra';// agregamos el texto
listaDeToppings.append(toppingNuevo);/* append nos permite generar un nodo nuevo, en este caso agregamos un nodo dentro de nuestra ul lista-toppings. tambien se puede usar appendChild*/

console.log(listaDeToppings.parentElement); /*En la consola podremos ver cual es el elemento padre de la lista, se mostrará el div con id contenedor */

console.log(listaDeToppings.parentElement.parentElement); /*De esta manera podemos acceder a una jerarquia mayor, la respuesta nos dará el padre del padre de la lista de toppings, es decir el body*/

console.log(listaDeToppings.children); //nos dará todos los hijos de la lista de toppings
console.log(listaDeToppings.children[0]);//Nos da acceso al primer elemento html

console.log(listaDeToppings.firstElementChild); //otra forma de acceder al primer elemento html 

console.log(listaDeToppings.lastElementChild);// accedemos al ultimo elemento html

console.log(listaDeToppings.previousElementSibling);/*accedemos al elemento hermano anterior, se mostraría titulo en la consola, podriamos obtener el próximo cambiando previous por next. En este ejemplo concreto se mostraria null en consola porque no existe.*/

/*Conceptos importantes para aprender eventos:
- Elemento target(blanco o diana): es el elemento que va a recibir el evento. 
- Trigger: desencadenante
- Event Handler (): Función que maneja un evento. Se ejecuta cuando éste ocurre.
- Event Listener: es la asociacion de un evento específico con una funcion. Está atento a escuchar el evento para ejecutar la funcion necesaria.
*/
//const albahaca = document.getElementById('albahaca'); //elemento target

//trigger: click del usuario

function mostrarClic(e) {
    console.log(e.target.innerText); //event handler
}

//albahaca.addEventListener('click', mostrarClic); //event listener

//si queremos abarcar todos los toppings podemos hacer:

const toppings = document.getElementsByClassName('topping'); //ofrece como respuesta en consola una coleccion html

for ( const topping of toppings) { //for of para recorrer el contenido de la coleccion
    topping.addEventListener('click', mostrarClic);
}