import './style.css';
import { obtenerPjPorNombre } from '../api/obtenerPjPorNombre.js';
import { obtenerPjPorPagina } from '../api/obtenerPjPorPagina.js';
import { obtenerPjPorUbicacion } from '../api/obtenerPjPorUbicacion.js';  
import { obtenerPjPorUrl } from '../api/obtenerPjPorUrl.js';
import { obtenerTodosLosPj } from '../api/obtenerTodosLosPj.js';
import { obtenerUbicaciones } from '../api/obtenerUbicaciones.js';


document.querySelector('#app').innerHTML = `

<img src="./imagen.webp" alt="imagen" class="img-fluid">
<img src="./Logo.png" alt="Logo">


<div class="d-flex justify-content-center align-items-center text-white" style="background-color: 10vh;">
  <h1>Personajes de Rick and Morty</h1>
</div>

<div class="d-flex flex-column justify-content-center align-items-center">
  <form>
    <div class="input-group m-1 style="max-width: 400px;">
      <input type="text" class="form-control" placeholder="Buscar personaje por nombre" aria-label="Buscar" aria-describedby="basic-addon2" id="inputValue">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" id="buscarPorId">Buscar por nombre</button>
      </div>
    </div>
  </form>

  <div class="input-group m-3 d-flex flex-wrap" style="max-width: 400px;">
    <select id="ubicaciones" class="form-select m-2">
      <option value="" selected>Selecciona una ubicacion</option>
    </select>
    <button class="btn btn-primary m-2" type="button" id="obtenerUbicacionPersonajes">Buscar por ubicacion</button>
  </div>
  <div id="pagination" class="d-flex flex-wrap align-items-center"></div>
  <div id="resultado" class="d-flex flex-wrap"></div>
</div>

<footer class="bg-dark text-light py-3 text center">
  <p class="mb-0">Todos los derechos reservados <span>2023</span></p>
</footer>
`;

const resultado = document.querySelector('#resultado');

const pagination = document.querySelector('#pagination');

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

window.addEventListener('load', async () => {
  let allCharactersData = await obtenerTodosLosPj();

  for (let page=1; page <= allCharactersData.pages; page++) {
    const button = document.createElement('button');
    button.textContent = page;
    button.classList.add('btn', 'btn-primary', 'm-1', 'p-2');

    button.addEventListener('click', async () => {
      limpiarHTML();
      const resultadoTodosLosPersonajes = await obtenerPjPorPagina(page);
      const personajesHTML = resultadoTodosLosPersonajes.map(personaje => `
        <div class="card m-2 shadoww" style="width: 20rem;">
          <div class="card-body">
            <h2>${personaje.name}</h2>
            <h5 class="card-title">Genero: ${personaje.gender}</h5>
            <img src="${personaje.image}" alt="${personaje.name}"class="img-fluid">
            <p>Especie: ${personaje.species}</p>
            <p>Estado: ${personaje.status}</p>
          </div>
        </div>
      `)
      resultado.innerHTML = personajesHTML;
    });
    pagination.appendChild(button);
  }
});

  const btnBusquedaByName = document.querySelector("#buscarPorId");
  btnBusquedaByName.addEventListener("click", async () => {

    limpiarHTML();

  const valorInput = document.querySelector('#inputValue').value;
  const personajes = await obtenerPjPorNombre(valorInput);

  const personajesHTML = personajes.map(personaje => `
    <div class="card m-2 shadow" style="width: 20rem;">
      <div class="card-body">
        <h2>${personaje.name}</h2>
        <h5 class="card-title">Género: ${personaje.gender}</h5>
        <img src="${personaje.image}" alt="${personaje.name}" class="img-fluid">
        <p>Especie: ${personaje.species}</p>
        <p>Estado: ${personaje.status}</p>
      </div>
    </div>
  `)

  resultado.innerHTML = personajesHTML; // Insertar el HTML generado en el resultado
});

window.addEventListener('load', async () => {
  limpiarHTML();
  const ubicacionesResponse = await obtenerUbicaciones();
  //selector para el select de ubicaciones
  const selectUbicaciones = document.getElementById('ubicaciones');
  ubicacionesResponse.forEach(ubicaciones => {
    const option = document.createElement('option');
    option.value = ubicaciones.url;
    option.textContent = ubicaciones.name;
    selectUbicaciones.appendChild(option);
  });
});

const ubicacionButton = document.querySelector('#obtenerUbicacionPersonajes');
ubicacionButton.addEventListener('click', async () => {
  limpiarHTML();
  const selectUbicaciones = document.getElementById('ubicaciones').value;
  const urlsPersonajesPorUbi = await obtenerPjPorUbicacion(selectUbicaciones);

  const detallesPersonajes = [];

  for (const url of urlsPersonajesPorUbi) {
    const personaje = await obtenerPjPorUrl(url);
    detallesPersonajes.push(personaje);
  }

  const personajesHTML = detallesPersonajes.map(personaje => `
    <div class="card m-2 shadow" style="width: 20rem;">
      <div class="card-body">
        <h2>${personaje.name}</h2>
        <h5 class="card-title">Género: ${personaje.gender}</h5>
        <img src="${personaje.image}" alt="${personaje.name}" class="img-fluid">
        <p>Especie: ${personaje.species}</p>
        <p>Estado: ${personaje.status}</p>
      </div>
    </div>
  `);

  resultado.innerHTML = personajesHTML.join('');
});

