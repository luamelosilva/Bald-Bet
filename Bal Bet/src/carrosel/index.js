import React, { useRef } from "react";
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width: viewportWidth} = Dimensions.get('window');

const data =[
  {title: 'Copa America', image: require('../img/america.png')},
  {title: 'Brasileirão', image: require('../img/brasil.png')},
  {title: 'Uefa', image: require('../img/uefa.jpeg')},
];

const Carrosel = ()=>{
  const carroselref = useRef(null);

  const renderitem = ({item}) => (
   <View style={styles.item}>
      <Image source={item.image} style={styles.image}/>
      <Text>{item.title}</Text>
   </View>
  );

  return(
    <View style={styles.container}>
      <Carousel
        ref={carroselref}
        data={data}
        renderitem={renderitem}
        sliderwidth={viewportWidth * 0.75}
      />
    </View>
  );
};


const styles = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
 },
 item:{
    backgroundColor: 'lightblue',
    borderRadius: 8,
    height: 250,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center'
 },
 image:{
  width: 150,
  height: 150,
  marginBottom: 10,
 },
});

export default Carrosel;