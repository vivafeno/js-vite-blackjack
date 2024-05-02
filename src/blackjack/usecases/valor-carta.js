



/**
 * Función que devuelve el valor de la carta dependiendo del nombre de la misma.
 * @param {String} carta String con el nombre de la carta.
 * @returns {Number} Valor carta en formato entero .
 */
export const valorCarta = (carta) => {
    if (carta.length === 0 ) throw new Error ('No se ha recibido ninguna carta')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}