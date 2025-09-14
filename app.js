// Contenedor principal
const content = document.getElementById("content");
const navButtons = document.querySelectorAll("nav button");

// Lista de imágenes de la carpeta /img/
const photoList = [
  "./imagenes/Imagen1.jpg",
  "./imagenes/Imagen2.jpg",
  "./imagenes/Imagen3.jpg",
  "./imagenes/Imagen4.jpg",
  "./imagenes/Imagen5.jpg"
];

// Contenido simulado de cada sección
const sections = {
  muro: `
    <h2>Muro</h2>
    <div class="post">📢 Hola, este es mi primer post en Fakebook.</div>
    <div class="post">🎉 Celebrando un gran día con amigos.</div>
  `,
  info: `
    <h2>Información</h2>
    <p><strong>Nombre:</strong> Juan Sebastian</p>
    <p><strong>Ciudad:</strong> Cali, Colombia</p>
    <p><strong>Trabajo:</strong> Desarrollador Web</p>
    <p><strong>Estudios:</strong> Universidad Unicatolica</p>
  `,
  photos: `
    <h2>Fotos</h2>
    <div class="photo-grid">
      ${photoList.map(src => `<img src="${src}" alt="foto">`).join("")}
    </div>
  `,
  boxes: `
    <h2>Boxes</h2>
    <p>complementos extra del perfil.</p>
    <ul>
      <li>Notas</li>
      <li>Eventos</li>
      <li>Juegos</li>
    </ul>
  `
};

// Función para mostrar contenido
function loadSection(section) {
  content.innerHTML = sections[section];

  // Actualizar estado activo de los botones
  navButtons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`[data-section="${section}"]`).classList.add("active");
}

// Eventos de navegación
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const section = button.getAttribute("data-section");
    loadSection(section);
  });
});

// Mostrar por defecto el Muro
loadSection("muro");
