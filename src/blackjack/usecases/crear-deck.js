// FUNCION PARA CREAR UN NUEVO DECK Y BARAJARLO

// Importar función shuffle para barajar el deck de la librería UNDERSCORE
import _ from 'underscore'

/**
 * Funcion para crear y mezclar una baraja de cartas
 * @param {Array<String>} tiposDeCarta Ejemplo : ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un array con los nombres de las cartas del deck
 */
export const crearDeck = (tiposDeCarta,  tiposEspeciales) => {

    if ( !tiposDeCarta || !tiposDeCarta.length === 0) throw new Error('El array con los tipos de carta son necesarios')       
    if ( !tiposEspeciales || !tiposEspeciales.length === 0) throw new Error('El array con los tipos especicales de cartas son necesarios')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }
    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }    
    deck = _.shuffle( deck );    
    return deck;
}