import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'

export default class Rockets extends React.Component{
  constructor(){
    super();
    this.state={
      rockets:[]
    }
  }
  componentDidMount(){
    fetch('https://api.spacexdata.com/v2/rockets')
    .then(response=>response.json())
    .then(res=>this.setState({rockets:res}))
  }

  render(){
    console.log(this.state)
    const rockets = this.state.rockets.map(rocket=>{
      const imgs = rocket.flickr_images.map((img,i)=>{
        return(
          <View key={i}>
             <Image source={{uri:img}} style={{width:300, height:300, marginBottom:10 }}/>
          </View>
        )
      })
      return (
        <View key={rocket.id} style={styles.container}>
        <Text style={{fontSize:20}}>{rocket.name}</Text>
         <Text style={{marginBottom:10}}>{rocket.description}</Text>
         {imgs}
        </View>
      )
    })
    return(
      <ScrollView >
        {rockets}
        
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