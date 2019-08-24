import React from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

const Jugadores = ({jugadores, agregarTitular, agregarSuplentes}) => (
    <View style={{flexDirection:'column'}}>
        {jugadores.map(j => {
            return(
                <View>
                    <Text style={{color: 'blue', fontSize: 20}} key={j.id}>{j.nombre}</Text>

                    <TouchableHighlight
                        onPress={() => agregarTitular(j)}
                        key= {Math.random()}
                    >
                        <View>
                            <Text>
                                Titular
                            </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        key= {Math.random()}
                        onPress={() => agregarSuplentes(j)}
                    >
                        <View>
                            <Text>
                                Suplente
                            </Text>
                        </View>   
                    </TouchableHighlight>
                </View>
            );
        }

        )}
    </View>
);


const mapsStateToProps = state => ({
    jugadores: state.jugadores
});
 
const mapsDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplentes(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
});

export default connect(mapsStateToProps, mapsDispatchToProps)(Jugadores);
