import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'

export default class Launches extends React.Component{
  constructor(){
    super();
    this.state={
      launches:[]
    }
  }
  componentDidMount(){
    fetch('https://api.spacexdata.com/v2/launches')
    .then(response=>response.json())
    .then(res=>this.setState({launches:res}))
  }

  render(){
    console.log(this.state)
    const launches = this.state.launches.map(mission=>{
      return (
        <View key={mission.flight_number} style={styles.container}>
          <Text>{mission.mission_name}</Text>
          <Image source={{uri:mission.links.mission_patch}} style={{width:300, height:300 }}/>
        </View>
      )
    })
    return(
      <ScrollView>
        {launches}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});