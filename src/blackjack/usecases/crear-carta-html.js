
/**
 *Esta función busca el archivo de la carta y lo presenta en el DOM
 * @param {String} carta Carta para representarla.
 * @returns {HTMLImageElement} Imagen de la Carta
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("La carta es obligatoria...");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
