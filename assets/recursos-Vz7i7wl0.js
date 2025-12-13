import"./modulepreload-polyfill-B5Qt9EMX.js";import"./dashboardP-BpB1wBJ6.js";const o=[{id:1,titulo:"Introducción a los Límites",categoria:"Límites y Continuidad",duracion:"10:32",thumbnail:"https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",youtubeId:"dQw4w9WgXcQ",materia:"Cálculo"}],r=document.getElementById("search-input"),s=document.getElementById("search-dropdown");let n=-1;r.addEventListener("input",t=>{const e=t.target.value.trim().toLowerCase();if(!e){s.classList.add("hidden");return}const a=o.filter(i=>i.titulo.toLowerCase().includes(e)||i.categoria.toLowerCase().includes(e)||i.materia.toLowerCase().includes(e));a.length>0?(d(a,e),s.classList.remove("hidden")):u()});function d(t,e){s.innerHTML=`
    <div class="p-2">
      <div class="px-3 py-2 text-xs font-semibold text-azul-medio uppercase">
        ${t.length} resultado${t.length!==1?"s":""}
      </div>
      ${t.map((a,i)=>`
        <div class="video-result flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all" 
             data-youtube-id="${a.youtubeId}"
             data-index="${i}">
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
            <h3 class="font-semibold text-azul-oscuro mb-1">${c(a.titulo,e)}</h3>
            <div class="flex items-center gap-2 text-sm text-azul-medio">
              <span class="px-2 py-0.5 bg-naranja/10 text-naranja rounded text-xs">${a.materia}</span>
              <span>•</span>
              <span>${a.categoria}</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `,document.querySelectorAll(".video-result").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.youtubeId;window.open(`https://www.youtube.com/watch?v=${i}`,"_blank"),r.value="",s.classList.add("hidden")})})}function c(t,e){const a=new RegExp(`(${e})`,"gi");return t.replace(a,'<mark class="bg-yellow-200 font-semibold">$1</mark>')}function u(){s.innerHTML=`
    <div class="p-8 text-center">
      <p class="text-azul-oscuro font-semibold mb-2">No se encontraron resultados</p>
      <p class="text-sm text-azul-medio">Intenta buscar con otras palabras clave</p>
    </div>
  `,s.classList.remove("hidden")}document.addEventListener("click",t=>{!r.contains(t.target)&&!s.contains(t.target)&&s.classList.add("hidden")});r.addEventListener("keydown",t=>{const e=s.querySelectorAll(".video-result");switch(t.key){case"ArrowDown":t.preventDefault(),n=Math.min(n+1,e.length-1),l(e);break;case"ArrowUp":t.preventDefault(),n=Math.max(n-1,-1),l(e);break;case"Enter":t.preventDefault(),n>=0&&e[n]&&e[n].click();break;case"Escape":s.classList.add("hidden");break}});function l(t){t.forEach((e,a)=>{a===n?e.classList.add("bg-naranja/10","border-2","border-naranja"):e.classList.remove("bg-naranja/10","border-2","border-naranja")})}
