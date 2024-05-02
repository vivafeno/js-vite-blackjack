import _ from 'underscore'
import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML} from './usecases'

// INICIALIZACIÓN VARIABLES
let puntosJugador       = 0;
let deck                = [];
const tiposDeCarta      = ['C','D','H','S'];
const tiposEspeciales   = ['A','J','Q','K'];

// Referencias del HTML
const btnPedir              = document.querySelector('#btnPedir');
const btnDetener            = document.querySelector('#btnDetener');
const btnNuevo              = document.querySelector('#btnNuevo');
const divCartasJugador      = document.querySelector('#jugador-cartas');
const divCartasComputadora  = document.querySelector('#computadora-cartas');
const puntosHTML            = document.querySelectorAll('small');

// CREAR DECK INICIAL
deck = crearDeck(tiposDeCarta, tiposEspeciales);


// EVENTOS DOM
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    divCartasJugador.append(crearCartaHTML(carta));   

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[puntosHTML.length-1], divCartasComputadora, deck);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[puntosHTML.length-1], divCartasComputadora, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[puntosHTML.length-1], divCartasComputadora, deck);
});


btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck(tiposDeCarta, tiposEspeciales);  

    puntosJugador           = 0;   
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    btnPedir.disabled       = false;
    btnDetener.disabled     = false;

    divCartasComputadora.innerHTML  = '';
    divCartasJugador.innerHTML      = '';
});