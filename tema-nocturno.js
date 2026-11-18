(() => {
    const STORAGE_KEY = "stylestep-modo-nocturno";
    const boton = document.createElement("button");
    boton.id = "themeToggle";
    boton.type = "button";
    boton.setAttribute("aria-pressed", "false");
    boton.setAttribute("aria-label", "Activar modo nocturno");
    document.body.appendChild(boton);

    function aplicarModoNocturno(activado) {
        document.body.classList.toggle("dark-mode", activado);
        boton.textContent = activado ? " Modo claro" : "Modo nocturno";
        boton.setAttribute("aria-pressed", String(activado));
        boton.setAttribute(
            "aria-label",
            activado ? "Activar modo claro" : "Activar modo nocturno"
        );
    }

    let modoGuardado = false;
    try {
        modoGuardado = localStorage.getItem(STORAGE_KEY) === "true";
    } catch (error) {
        // El sitio sigue funcionando aunque el navegador bloquee localStorage.
    }

    aplicarModoNocturno(modoGuardado);

    boton.addEventListener("click", () => {
        const activar = !document.body.classList.contains("dark-mode");
        aplicarModoNocturno(activar);
        try {
            localStorage.setItem(STORAGE_KEY, String(activar));
        } catch (error) {
            // La selección se mantiene durante esta página.
        }
    });
})();
