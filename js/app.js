// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

// Eventos
document.addEventListener( 'DOMContentLoaded', () => {
  mostrarAutos(); // Muestra los automoviles al cargar

  // Llena las opciones de los años
  llenarSelect();
});

// Funciones
function mostrarAutos() {
  autos.forEach( auto => {

    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement('P');
    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color} 
    `
    resultado.appendChild(autoHTML);
  })
}

// Genera los años del select
function llenarSelect() {
  for( let i = max; i >= min; i-- ) {
     const opcion = document.createElement('OPTION');
     opcion.value = i;
     opcion.textContent = i;

     year.appendChild(opcion);
  }
}