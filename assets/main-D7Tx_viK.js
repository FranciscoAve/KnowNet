import"./modulepreload-polyfill-B5Qt9EMX.js";const l=`
    <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl transform transition-all scale-100 opacity-100 animate-fadeIn border border-gray-100">
        <div class="p-8">
            <!-- Header con botón cerrar -->
            <div class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-[#0F2947] to-[#1E3A5F] rounded-xl flex items-center justify-center shadow-lg">
                        <span class="material-symbols-outlined text-white text-2xl">school</span>
                    </div>
                    <h2 class="text-2xl font-bold text-[#0F2947]">Iniciar Sesión</h2>
                </div>
                <button id="close-modal" class="text-gray-400 hover:text-[#0F2947] transition-colors p-2 hover:bg-gray-100 rounded-lg">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <!-- Formulario -->
            <form id="login-form" class="space-y-6">
                <!-- Usuario -->
                <div class="space-y-2">
                    <label class="block text-sm font-semibold text-[#0F2947]" for="username">
                        Usuario o Email
                    </label>
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                            <span class="material-symbols-outlined text-gray-400 text-[20px] group-focus-within:text-[#FF8C42]">person</span>
                        </div>
                        <input 
                            class="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-[#FF8C42] transition-all sm:text-sm bg-gray-50 focus:bg-white" 
                            id="username" 
                            name="username" 
                            placeholder="tu.usuario@espol.edu.ec" 
                            type="text"
                            required
                        />
                    </div>
                </div>

                <!-- Contraseña -->
                <div class="space-y-2">
                    <label class="block text-sm font-semibold text-[#0F2947]" for="password">
                        Contraseña
                    </label>
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                            <span class="material-symbols-outlined text-gray-400 text-[20px] group-focus-within:text-[#FF8C42]">lock</span>
                        </div>
                        <input 
                            class="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-[#FF8C42] transition-all sm:text-sm bg-gray-50 focus:bg-white" 
                            id="password" 
                            name="password" 
                            placeholder="••••••••" 
                            type="password"
                            required
                        />
                    </div>
                </div>

                <!-- Recordarme / Olvidaste contraseña -->
                <div class="flex items-center justify-between text-sm">
                    <div class="flex items-center">
                        <input 
                            class="h-4 w-4 text-[#FF8C42] focus:ring-[#FF8C42] border-gray-300 rounded cursor-pointer" 
                            id="remember-me" 
                            name="remember-me" 
                            type="checkbox"
                        />
                        <label class="ml-2 block text-gray-600 cursor-pointer select-none" for="remember-me">
                            Recordarme
                        </label>
                    </div>
                    <div>
                        <a class="font-medium text-[#1E3A5F] hover:text-[#FF8C42] transition-colors" href="#">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>

                <!-- Botón de Inicio de Sesión -->
                <button 
                    class="w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-[#FF8C42] to-[#ff7a29] hover:from-[#ff7a29] hover:to-[#ff6810] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8C42] transition-all transform hover:scale-[1.02] active:scale-95" 
                    type="submit"
                >
                    <span>Iniciar Sesión</span>
                    <span class="material-symbols-outlined text-xl">arrow_forward</span>
                </button>

                <!-- Botón de Cancelar (secundario) -->
                <button 
                    id="cancel-btn"
                    class="w-full flex justify-center py-3 px-4 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all" 
                    type="button"
                >
                    Cancelar
                </button>
            </form>

            <!-- Enlace a registro -->
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    ¿No tienes una cuenta? 
                    <a class="font-semibold text-[#1E3A5F] hover:text-[#FF8C42] transition-colors" href="#">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    </div>
`,i=document.getElementById("inicioSesion"),t=document.getElementById("modal-overlay");i.addEventListener("click",e=>{e.preventDefault(),t.innerHTML=l,t.classList.remove("hidden"),document.body.style.overflow="hidden",d()});function d(){const e=document.getElementById("close-modal"),o=document.getElementById("cancel-btn"),s=document.getElementById("login-form");e?.addEventListener("click",n),o?.addEventListener("click",n),t.addEventListener("click",a=>{a.target===t&&n()}),document.addEventListener("keydown",r),s?.addEventListener("submit",c)}function n(){t.classList.add("hidden"),document.body.style.overflow="auto",document.removeEventListener("keydown",r)}function r(e){e.key==="Escape"&&n()}function c(e){e.preventDefault();const o=document.getElementById("username").value,s=document.getElementById("password").value;console.log("Login attempt:",{username:o,password:s}),o&&s&&(window.location.href="dashboardP.html")}
