import React from 'react'
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

const Titulares = ({titulares, eliminarTitular}) => (
    <View style={{flexDirection:'column'}}>
        {titulares.map(j => (
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'blue', fontSize: 20}} key={j.id}>{j.nombre}</Text>

                <TouchableHighlight
                    onPress={() => eliminarTitular(j)}
                    key= {Math.random()}
                >
                    <View style={{alignItems: 'center'}}>
                        <Text style={{backgroundColor: 'black', color: 'white'}}>
                            X
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
        )}
    </View>
)
const mapStateToProps = (state) =>({
    titulares: state.titulares,
})

const mapDispatchToProps = dispatch =>({
    eliminarTitular(jugador){
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
