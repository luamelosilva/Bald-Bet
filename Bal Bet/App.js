import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';


export default function App(){
    return(
        <View style={styles.container}>

            <View style={styles.navbar}>
                <Text style={styles.navTxt}>BaldBet</Text>
            </View>

           {/* Carrosel */}
            
            <Text style={styles.txt}>Principais Eventos</Text>
            
            <View style={styles.cardBack}>
                <View style={styles.miniCard}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FF4500',
    },
    navbar:{
        backgroundColor:'white',
        width:'100%',
        height:90,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        //Sombras Android
        elevation:25,
        //SOMBRAS IOS
        shadowColor:'#000',
        shadowOffset:{width:0,height:25},
        shadowOpacity:0.3,
        shadowRadius:3,
    },
    navTxt:{
        color:'#FF4500',
        fontSize: 36,
        fontWeight:'bold',
        textAlign: 'center',
    },txt:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        
        left: 27, 
    },
    cardBack:{
        width: 350,
        height: 101,
        backgroundColor: 'white',
        top: 45,
        left: 27,
        borderRadius:10
    },
    miniCard:{
        backgroundColor:'#FF4500',
        width:58,
        height:50,
        justifyContent: 'space-around',
        borderRadius: 5,
        
        
    },
});