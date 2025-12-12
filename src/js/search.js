// Base de datos de videos
const videosDatabase = [
  {
    id: 1,
    titulo: "Introducción a los Límites",
    categoria: "Límites y Continuidad",
    duracion: "10:32",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    materia: "Cálculo"
  },
  // ... más videos
];

const searchInput = document.getElementById('search-input');
const dropdown = document.getElementById('search-dropdown');
let highlightedIndex = -1;

// Filtrar y mostrar resultados
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim().toLowerCase();
  
  if (!query) {
    dropdown.classList.add('hidden');
    return;
  }

  const results = videosDatabase.filter(video => 
    video.titulo.toLowerCase().includes(query) ||
    video.categoria.toLowerCase().includes(query) ||
    video.materia.toLowerCase().includes(query)
  );

  if (results.length > 0) {
    renderResults(results, query);
    dropdown.classList.remove('hidden');
  } else {
    showNoResults();
  }
});

// Renderizar resultados
function renderResults(videos, query) {
  dropdown.innerHTML = `
    <div class="p-2">
      <div class="px-3 py-2 text-xs font-semibold text-azul-medio uppercase">
        ${videos.length} resultado${videos.length !== 1 ? 's' : ''}
      </div>
      ${videos.map((video, index) => `
        <div class="video-result flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all" 
             data-youtube-id="${video.youtubeId}"
             data-index="${index}">
          <div class="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-200">
            <img src="${video.thumbnail}" alt="${video.titulo}" class="w-full h-full object-cover">
            <div class="absolute inset-0 flex items-center justify-center bg-black/30">
              <span class="material-symbols-outlined text-white text-4xl">play_circle</span>
            </div>
            <div class="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
              ${video.duracion}
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-azul-oscuro mb-1">${highlightText(video.titulo, query)}</h3>
            <div class="flex items-center gap-2 text-sm text-azul-medio">
              <span class="px-2 py-0.5 bg-naranja/10 text-naranja rounded text-xs">${video.materia}</span>
              <span>•</span>
              <span>${video.categoria}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Agregar event listeners a los resultados
  document.querySelectorAll('.video-result').forEach(result => {
    result.addEventListener('click', () => {
      const youtubeId = result.dataset.youtubeId;
      window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
      searchInput.value = '';
      dropdown.classList.add('hidden');
    });
  });
}

// Resaltar texto
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 font-semibold">$1</mark>');
}

// Sin resultados
function showNoResults() {
  dropdown.innerHTML = `
    <div class="p-8 text-center">
      <p class="text-azul-oscuro font-semibold mb-2">No se encontraron resultados</p>
      <p class="text-sm text-azul-medio">Intenta buscar con otras palabras clave</p>
    </div>
  `;
  dropdown.classList.remove('hidden');
}

// Cerrar al hacer click fuera
document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});

// Navegación con teclado
searchInput.addEventListener('keydown', (e) => {
  const results = dropdown.querySelectorAll('.video-result');
  
  switch(e.key) {
    case 'ArrowDown':
      e.preventDefault();
      highlightedIndex = Math.min(highlightedIndex + 1, results.length - 1);
      updateHighlight(results);
      break;
    case 'ArrowUp':
      e.preventDefault();
      highlightedIndex = Math.max(highlightedIndex - 1, -1);
      updateHighlight(results);
      break;
    case 'Enter':
      e.preventDefault();
      if (highlightedIndex >= 0 && results[highlightedIndex]) {
        results[highlightedIndex].click();
      }
      break;
    case 'Escape':
      dropdown.classList.add('hidden');
      break;
  }
});

function updateHighlight(results) {
  results.forEach((result, index) => {
    if (index === highlightedIndex) {
      result.classList.add('bg-naranja/10', 'border-2', 'border-naranja');
    } else {
      result.classList.remove('bg-naranja/10', 'border-2', 'border-naranja');
    }
  });
}