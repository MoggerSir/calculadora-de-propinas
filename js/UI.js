/* 
   Refactorización: CrearElemento ahora acepta hijos, 
   lo que permite anidar elementos fácilmente.
*/
const CrearElemento = (etiqueta, propiedades = {}, hijos = []) => {
    const el = document.createElement(etiqueta);
    
    // Asignar propiedades y clases
    Object.entries(propiedades).forEach(([clave, valor]) => {
        if (clave === 'class') {
            el.classList.add(...[].concat(valor));
        } else {
            el[clave] = valor;
        }
    });

    // Agregar hijos (pueden ser nodos o texto)
    hijos.forEach(hijo => {
        if (hijo) {
            el.appendChild(typeof hijo === 'string' ? document.createTextNode(hijo) : hijo);
        }
    });

    return el;
};

const randomNumber = () => Math.floor(Math.random() * 5200);
const menu = ["Pulpo encebollado", "Ceviche", "langosta", "tlacoyos", "tacos", "tostadas"];
const randomMenu = () => menu[Math.floor(Math.random() * menu.length)];

const CrearCart = () => {
    const contenedor = document.querySelector('.contenedor');
    
    // Limpiar contenedor por si acaso
    contenedor.innerHTML = '';

    const ui = [

        CrearElemento('h1', { textContent: 'Calculadora de Propinas' }),
        CrearElemento('div', { class: 'contenido' }, [
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),
            CrearElemento('p', { class: 'cuenta', textContent: `${randomMenu()} ${randomNumber()}$`}),

        ]),

        CrearElemento('div', { class: 'ContenedorInputs' }, [
            CrearElemento('label', { for: 'valorCuenta', textContent: 'Valor de la cuenta:' }),
            CrearElemento('input', { type: 'number', class: 'input', id: 'valorCuenta', placeholder: 'su cuenta es de: $$$ ' }),
            CrearElemento('br'),
            CrearElemento('label', { for: 'tipPercentage', textContent: 'Porcentaje de propina:' }),
            CrearElemento('select', { class: 'input', id: 'tipPercentage' }, 
                [1, 5 ,10, 12, 15, 18, 20].map(v => CrearElemento('option', { value: v, textContent: v + '%' }))
            )
        ]),
        CrearElemento('div', { class: 'boton', id: 'calculateBtn', textContent: 'Calcular Propina' }),
        CrearElemento('div', { id: 'result' })
    ];
    contenedor.append(...ui);
};

document.addEventListener('DOMContentLoaded', CrearCart);




