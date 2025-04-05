const contenedor = document.getElementById('contenedorImagenes');
const totalImagenes = 20;
const imagenes = [];
const rutas = Array.from({ length: totalImagenes }, (_, i) => `img/bus${i + 1}.png`);

function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  return { x, y };
}


rutas.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.style.position = 'absolute';

  const { x, y } = getRandomPosition();
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  contenedor.appendChild(img);
  imagenes.push(img);
});



setInterval(() => {
  imagenes.forEach(img => {
    const { x, y } = getRandomPosition();
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });
}, 400); 
