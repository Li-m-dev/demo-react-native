import React from 'react';
import {View, Text, Button} from 'react-native'

import Launches from '../components/Launches'

export default class Home extends React.Component{
  render(){
    return(
      <View>
        <Button title="rockets" onPress={()=>this.props.navigation.push('Rockets')}/>
        
        <Launches/>
      </View>
    )
  }
}