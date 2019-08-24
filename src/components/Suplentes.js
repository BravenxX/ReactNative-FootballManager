import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

const Suplentes = ({suplentes, eliminarSuplente}) => (
    <View style={{flexDirection:'column'}}>
        {suplentes.map(j => (
               <View style={{flexDirection: 'row'}}>
               <Text style={{color: 'blue', fontSize: 20}} key={j.id}>{j.nombre}</Text>

               <TouchableHighlight
                   onPress={() => eliminarSuplente(j)}
                   key= {Math.random()}
               >
                   <View style={{alignItems: 'center', width: 20, height: 20}}>
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

const mapStateToProps = (state) => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    eliminarSuplente(jugador){
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
