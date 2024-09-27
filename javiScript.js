	// Inicializar el contador de clikis
    let clickCount = 0;

    // Esperar a que el DOM esta completamente cargado
    document.addEventListener("DOMContentLoaded", function() {
    
        // busco el ID
        const link = document.getElementById('specialLink');
    
        // Añadir un evento de clic al enlace
        link.addEventListener('click', function(event) {
            // Evitar que el enlace redirija de inmediato
            
            event.preventDefault();
    
            // Incrementar el contador de clics
            clickCount++;
        
            if (clickCount === 3) {
                // Redirigir después de 3 clics
                window.location.href = "https://www.youtube.com/watch?v=uE-1RPDqJAY"; // Cambia la URL por la que necesites
            } else {
                // Mostrar en la consola cuántos clics ha hecho el usuario :3
                console.log(`Has hecho ${clickCount} clic(s). Necesitas 3 clics para continuar.`);
            }
        
    });
});
   
