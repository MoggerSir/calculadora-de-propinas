
const cantidadAPagar = Math.floor(Math.random() * 30000);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Buscamos los elementos una vez que el DOM está listo
    // (Asegurándonos de que UI.js ya los creó)
    const btn = document.querySelector('#calculateBtn');
    const input = document.querySelector('#valorCuenta');
    const porcentaje = document.querySelector('#tipPercentage');
    const resultado = document.querySelector('#result');

    if (input) {
        input.value = cantidadAPagar;
        input.disabled = true;
    }

    // 2. Añadimos el listener solo si el botón existe en el DOM
    if (btn) {
        btn.addEventListener('click', () => {
            const cuenta = parseFloat(input.value);
            const porc = parseFloat(porcentaje.value);
            
            // Fórmula corregida: monto_propina = (cuenta * porcentaje) / 100
            const propina = (cuenta * porc) / 100;
            const total = cuenta + propina;
            
            console.log(`Propina: ${propina}, Total: ${total}`);
            
            if (resultado) {
                // Mostramos el resultado de forma atractiva
                resultado.style.marginTop = '20px';
                resultado.innerHTML = `
                    <p class='ticket'><strong>Propina:</strong> $${propina.toLocaleString()}</p>
                    <p class='ticket'><strong>Total con propina:</strong> $${total.toLocaleString()}</p>
                    <p class='ticket'><strong>Gracias por su visita :)</strong></p>
                `;
            }
        });
    }
});
