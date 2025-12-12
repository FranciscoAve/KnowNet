// ========================================
// NAVEGACIÓN PRINCIPAL
// ========================================
const btnToindex = document.getElementById("btnToPrincipal");

btnToindex.addEventListener("click", () => {
    window.location.href = "dashboardP.html";
});

// ========================================
// MENÚ MÓVIL - HAMBURGUESA
// ========================================
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");

// Abrir menú móvil
hamburgerBtn?.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.body.style.overflow = 'hidden'; 
});

// Cerrar menú móvil
closeMenuBtn?.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    document.body.style.overflow = 'auto'; // Restaurar scroll
});

// Cerrar al hacer click en un link del menú
const mobileLinks = mobileMenu?.querySelectorAll('a');
mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");
        document.body.style.overflow = 'auto';
    });
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('translate-x-0')) {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");
        document.body.style.overflow = 'auto';
    }
});



document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const page = link.getAttribute('data-page');
        
        if (page.startsWith('#')) {
            const section = document.querySelector(page);
            section?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Si es una página, navegar
            window.location.href = page;
        }
    });
});


const cursos_facultad = document.getElementById("card-cursos");
cursos_facultad?.addEventListener("click", ()=>{
    window.location.href='facultad.html';
});

const card_calculo = document.getElementById("card-calculo");
card_calculo?.addEventListener("click", ()=>{
    window.location.href='materias.html';
});

const searchCuv = document.getElementById("searchCuv");
searchCuv?.addEventListener("click", ()=>{
    window.location.href='recursos_videos_cuv.html'
})

const materias_basicas = document.getElementById("materias_basicas");
materias_basicas?.addEventListener("click", ()=>{
    window.location.href='materias_basicas.html';
});


const materia_calculo = document.getElementById("materia_calculo");
materia_calculo?.addEventListener("click", ()=>{
    window.location.href='materias.html';
});

const btn_perfil = document.getElementById("btn-perfil");
btn_perfil?.addEventListener("click", ()=>{
    window.location.href='perfil.html';
});
