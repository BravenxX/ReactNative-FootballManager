import { createStore } from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "juanito",
        },
        {
            id: 2,
            nombre: "Pedro",
        }
    ],
    titulares: [
        {
            id: 3,
            nombre: "PERES",
        },
        {
            id: 4,
            nombre: "Axel",
        }
    ],
    suplentes: [
        {
            id: 5,
            nombre: "hernesto",
        },
        {
            id: 6,
            nombre: "Maria",
        }
    ]
}

//funcion reductora
// state = estado actual 

const reducerEntrenador = (state = initialState, action) =>{
    if(action.type === "AGREGAR_TITULAR"){

        //...state = que se retorne todo lo que tiene el estado
        // y a titulares sumarle el objeto que se envío en el action

        // Y para sacar al jugador de la lista para que quede solo como titular
        // vamos a filtrara los jugadores para que se queden solo los que no 
        // coinciden y sacar al que se va a cambiar a titular

        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter( j => j.id !== action.jugador.id )
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            titulares: state.titulares.filter( j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id)
        }
    }
    return state;
}

export default createStore(reducerEntrenador);