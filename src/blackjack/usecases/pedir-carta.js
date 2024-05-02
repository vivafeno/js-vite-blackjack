// 


/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck Array con la baraja de juego en curso
 * @returns {String} Devuelve una carta del deck pasado por parámetro.
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) throw new Error ('No hay cartas en el deck');    
    const carta = deck.pop();
    return carta;
}
