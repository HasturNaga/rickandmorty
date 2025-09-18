import './style.css';

document.querySelector('#app').innerHTML = `

<div class="hero d-flex">
  <!-- Contenido superpuesto -->
  <div class="contenido text-white">
    <img src="/vite.svg" alt="Logo" class="mb-3" style="min-width: 5vw;">
    <h1 class="titulo mb-4">Bienvenido a la API de Rick y Morty</h1>

    <form class="mb-3">
      <div class="input-group" style="max-width: 400px;">
        <input type="text" class="form-control" placeholder="Buscar personaje..." id="inputValue">
        <button class="btn btn-primary" type="button" id="buscarPorId">Buscar por nombre</button>
      </div>
    </form>

    <div class="d-flex flex-wrap mb-3" style="max-width: 400px;">
      <select id="ubicaciones" class="form-select m-2 flex-grow-1">
        <option value="" selected>Selecciona una ubicación</option>
      </select>
      <button class="btn btn-primary m-2" type="button" id="buscarPorUbicacion">Buscar por ubicación</button>
    </div>

    <div id="paginaction" class="d-flex flex-wrap align-items-center"></div>
    <div id="resultado" class="d-flex flex-wrap"></div>
  </div>
</div>

<!-- Footer -->
<footer class="bg-dark text-light py-3 text-center">
  <p class="m-0">Todos los derechos reservados <span>2023</span></p>
</footer>
`;
