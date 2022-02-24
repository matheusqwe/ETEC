/*sintax do import =>     import nome_do_servico_ou_pacote from 'detentor_do_pacote'
import React from 'react'; 
import { Text, wiew} from 'react-native';   
para importar uma conjunto de objeto predefinidos => import {}
*/

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const myFirstApp = () => {
  return (

    <View style={{
      position: 'absolute',
      width:,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
    }}>


      <View style={{
        postion: 'relative',
        top: 50,
        left: 50,
        backgroundColor: 'green'
      }} >

        <Text style={{
          fontSize: 40,
          letterSpacing: 3
        }}> Hello world!!</Text>
      </View>

    </View>

  );
}

export default myFirstApp;