import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>JUGADORES: </Text>
            <Jugadores/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>EQUIPO SELECCIONADO: </Text>
            <EquipoSeleccionado/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
