// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Gnerar un objeto con los parametros de busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
}

// Event listener para los select de bsuqeuda
marca.addEventListener( 'change', (e) => {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();
})

year.addEventListener( 'change', (e) => {
  datosBusqueda.year = parseInt(e.target.value);

  filtrarAuto();
})

minimo.addEventListener( 'change', (e) => {
  datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener( 'change', (e) => {
  datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener( 'change', (e) => {
  datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener( 'change', (e) => {
  datosBusqueda.transmision = e.target.value;
})

color.addEventListener( 'change', (e) => {
  datosBusqueda.color = e.target.value;
})

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

// Función que busca en base a la busqueda
function filtrarAuto() {
  const resultado = autos.filter( filtrarMarca ).filter( filtrarYear );

  console.log(resultado)
}

function filtrarMarca(auto) {
  if( datosBusqueda.marca ) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}

function filtrarYear(auto) {
  if( datosBusqueda.year ) {
    return auto.year === datosBusqueda.year;
  }
  return auto;
}