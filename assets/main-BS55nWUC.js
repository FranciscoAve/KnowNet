import"./modulepreload-polyfill-B5Qt9EMX.js";const l=`
    <div class="w-full max-w-md bg-white rounded-xl shadow-2xl transform transition-all scale-100 opacity-100 animate-fadeIn">
        <div class="p-8">
            <!-- Header con botón cerrar -->
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-[#0F2947]">Iniciar Sesión</h2>
                <button id="close-modal" class="text-gray-400 hover:text-[#0F2947] transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <!-- Formulario -->
            <form id="login-form" class="space-y-6">
                <!-- Usuario -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-[#0F2947]" for="username">
                        Usuario
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span class="material-symbols-outlined text-gray-400 text-[20px]">person</span>
                        </div>
                        <input 
                            class="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent sm:text-sm" 
                            id="username" 
                            name="username" 
                            placeholder="Ingresa tu usuario" 
                            type="text"
                            required
                        />
                    </div>
                </div>

                <!-- Contraseña -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-[#0F2947]" for="password">
                        Contraseña
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span class="material-symbols-outlined text-gray-400 text-[20px]">lock</span>
                        </div>
                        <input 
                            class="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent sm:text-sm" 
                            id="password" 
                            name="password" 
                            placeholder="Ingresa tu contraseña" 
                            type="password"
                            required
                        />
                    </div>
                </div>

                <!-- Recordarme / Olvidaste contraseña -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input 
                            class="h-4 w-4 text-[#FF8C42] focus:ring-[#FF8C42] border-gray-300 rounded" 
                            id="remember-me" 
                            name="remember-me" 
                            type="checkbox"
                        />
                        <label class="ml-2 block text-sm text-gray-600" for="remember-me">
                            Recordarme
                        </label>
                    </div>
                    <div class="text-sm">
                        <a class="font-medium text-[#1E3A5F] hover:text-[#FF8C42] transition-colors" href="#">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>

                <!-- Botones -->
                <div class="grid grid-cols-2 gap-4 pt-2">
                    <button 
                        id="cancel-btn"
                        class="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8C42] transition-colors" 
                        type="button"
                    >
                        Cancelar
                    </button>
                    <button 
                        class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-[#FF8C42] hover:bg-[#e67a35] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8C42] transition-all" 
                        type="submit"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </form>

            <!-- Enlace a registro -->
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    ¿No tienes una cuenta? 
                    <a class="font-medium text-[#1E3A5F] hover:text-[#FF8C42] transition-colors" href="#">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    </div>
`,i=document.getElementById("inicioSesion"),t=document.getElementById("modal-overlay");i.addEventListener("click",e=>{e.preventDefault(),t.innerHTML=l,t.classList.remove("hidden"),document.body.style.overflow="hidden",d()});function d(){const e=document.getElementById("close-modal"),s=document.getElementById("cancel-btn"),n=document.getElementById("login-form");e?.addEventListener("click",o),s?.addEventListener("click",o),t.addEventListener("click",r=>{r.target===t&&o()}),document.addEventListener("keydown",a),n?.addEventListener("submit",c)}function o(){t.classList.add("hidden"),document.body.style.overflow="auto",document.removeEventListener("keydown",a)}function a(e){e.key==="Escape"&&o()}function c(e){e.preventDefault();const s=document.getElementById("username").value,n=document.getElementById("password").value;console.log("Login attempt:",{username:s,password:n}),s&&n&&(window.location.href="dashboardP.html")}
