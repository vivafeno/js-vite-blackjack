import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {Number} puntosMinimos Puntos a batir por la computadora.
 * @param {HTMLElement} puntosHTML Elemento del DOM donde representar los puntos de la computadora .
 * @param {HTMLElement} divCartasComputadora Elemento del DOM donde representar las cartas de la computadora.
 * @param {Array} deck Baraja
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error('Faltan los puntos de los contrincantes...')
    if (!deck) throw new Error('Falta la baraja del juego activo...')
    if (!puntosHTML) throw new Error('Falta el elemento en donde representar los putos de la computadora...')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;        
        divCartasComputadora.append(crearCartaHTML(carta));
        

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 500 );
}

