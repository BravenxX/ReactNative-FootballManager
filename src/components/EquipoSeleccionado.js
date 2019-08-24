import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Suplentes from './Suplentes';
import Titulares from './Titulares';

class EquipoSeleccionado extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 24, color:'red'}}>Titulares</Text>
                <Titulares />
                <Text style={{fontSize: 24, color:'red'}}>Suplentes</Text>
                <Suplentes />
            </View>
        )
    }
}

export default EquipoSeleccionado;
