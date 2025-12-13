import"./modulepreload-polyfill-B5Qt9EMX.js";import"./dashboardP-BpB1wBJ6.js";const d=[{id:1,titulo:"Introducción y espacios métricos",categoria:"Límites y Continuidad",duracion:"02:07:45",thumbnail:"https://img.youtube.com/vi/mBRxY5cu33Q/mqdefault.jpg",youtubeId:"mBRxY5cu33Q",materia:"Cálculo"},{id:2,titulo:"Definición formal del límite",categoria:"Límites y Continuidad",duracion:"01:44:34",thumbnail:"https://img.youtube.com/vi/f7y5jSWD9dc/mqdefault.jpg",youtubeId:"f7y5jSWD9dc",materia:"Cálculo"},{id:3,titulo:"Límites laterales y gráficos",categoria:"Límites y Continuidad",duracion:"01:13:58",thumbnail:"https://img.youtube.com/vi/-oAg599xThE/mqdefault.jpg",youtubeId:"-oAg599xThE",materia:"Cálculo"},{id:4,titulo:"Continuidad",categoria:"Límites y Continuidad",duracion:"01:01:21",thumbnail:"https://img.youtube.com/vi/UjBPZPul58Y/mqdefault.jpg",youtubeId:"UjBPZPul58Y",materia:"Cálculo"},{id:5,titulo:"Introducción y derivadas por definición",categoria:"Derivadas y sus Aplicaciones",duracion:"01:35:20",thumbnail:"https://img.youtube.com/vi/ifVtYnvCjRo/mqdefault.jpg",youtubeId:"ifVtYnvCjRo",materia:"Cálculo"},{id:6,titulo:"Reglas y propiedades de la derivada",categoria:"Derivadas y sus Aplicaciones",duracion:"01:58:07",thumbnail:"https://img.youtube.com/vi/NzkICsMBfVA/mqdefault.jpg",youtubeId:"NzkICsMBfVA",materia:"Cálculo"},{id:6,titulo:"Regla de la cadena",categoria:"Derivadas y sus Aplicaciones",duracion:"01:02:01",thumbnail:"https://img.youtube.com/vi/iJS23HIoY34/mqdefault.jpg",youtubeId:"iJS23HIoY34",materia:"Cálculo"},{id:7,titulo:"Derivación implícita",categoria:"Derivadas y sus Aplicaciones",duracion:"01:23:59",thumbnail:"https://img.youtube.com/vi/ELJZlIh7Cok/mqdefault.jpg",youtubeId:"ELJZlIh7Cok",materia:"Cálculo"}],l=document.getElementById("search-input"),i=document.getElementById("search-dropdown");let o=-1;l.addEventListener("input",e=>{const t=e.target.value.trim().toLowerCase();if(!t){i.classList.add("hidden");return}const a=d.filter(s=>s.titulo.toLowerCase().includes(t)||s.categoria.toLowerCase().includes(t)||s.materia.toLowerCase().includes(t));a.length>0?(u(a,t),i.classList.remove("hidden")):c()});function u(e,t){i.innerHTML=`
    <div class="p-2">
      <div class="px-3 py-2 text-xs font-semibold text-azul-medio uppercase">
        ${e.length} resultado${e.length!==1?"s":""}
      </div>
      ${e.map((a,s)=>`
        <div class="video-result flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all" 
             data-youtube-id="${a.youtubeId}"
             data-index="${s}">
          <div class="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-200">
            <img src="${a.thumbnail}" alt="${a.titulo}" class="w-full h-full object-cover">
            <div class="absolute inset-0 flex items-center justify-center bg-black/30">
              <span class="material-symbols-outlined text-white text-4xl">play_circle</span>
            </div>
            <div class="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
              ${a.duracion}
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-azul-oscuro mb-1">${r(a.titulo,t)}</h3>
            <div class="flex items-center gap-2 text-sm text-azul-medio">
              <span class="px-2 py-0.5 bg-naranja/10 text-naranja rounded text-xs">${a.materia}</span>
              <span>•</span>
              <span>${a.categoria}</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `,document.querySelectorAll(".video-result").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.youtubeId;window.open(`https://www.youtube.com/watch?v=${s}`,"_blank"),l.value="",i.classList.add("hidden")})})}function r(e,t){const a=new RegExp(`(${t})`,"gi");return e.replace(a,'<mark class="bg-yellow-200 font-semibold">$1</mark>')}function c(){i.innerHTML=`
    <div class="p-8 text-center">
      <p class="text-azul-oscuro font-semibold mb-2">No se encontraron resultados</p>
      <p class="text-sm text-azul-medio">Intenta buscar con otras palabras clave</p>
    </div>
  `,i.classList.remove("hidden")}document.addEventListener("click",e=>{!l.contains(e.target)&&!i.contains(e.target)&&i.classList.add("hidden")});l.addEventListener("keydown",e=>{const t=i.querySelectorAll(".video-result");switch(e.key){case"ArrowDown":e.preventDefault(),o=Math.min(o+1,t.length-1),n(t);break;case"ArrowUp":e.preventDefault(),o=Math.max(o-1,-1),n(t);break;case"Enter":e.preventDefault(),o>=0&&t[o]&&t[o].click();break;case"Escape":i.classList.add("hidden");break}});function n(e){e.forEach((t,a)=>{a===o?t.classList.add("bg-naranja/10","border-2","border-naranja"):t.classList.remove("bg-naranja/10","border-2","border-naranja")})}
