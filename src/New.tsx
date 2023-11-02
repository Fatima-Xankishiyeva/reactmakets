import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function New(){
    return(
        <SafeAreaView style={styles.area}>
            <View>
                <Image style={{marginTop:142,width:412,height:700}} source={require('./assets/icons/images/illustration.png')}/>
                <Text style={{color:'#FFFFFF',fontSize:37,fontWeight:700,lineHeight:47.88,marginTop:-800,padding:25,}}>Welcome to</Text>
                <Text style={{color:'#FFA300',fontSize:37,fontWeight:700,lineHeight:46.25,padding:25,marginTop:-37,fontStyle:"normal"}}>MUSIFY</Text>
                <Text style={{color:'#FFFFFF',fontSize:13,fontWeight:400,lineHeight:24,marginHorizontal:25}}>An interactive music app designed to really</Text>
                <Text style={{color:'#FFFFFF',fontSize:13,fontWeight:400,lineHeight:24,marginHorizontal:25}}>provide a fully-formed experience to better</Text>
                <Text style={{color:'#FFFFFF',fontSize:13,fontWeight:400,lineHeight:24,marginHorizontal:25}}>your instrument playing.</Text>
                <Image style={{margin:25}} source={require('./assets/icons/images/Vector.png')}/>
                <Text style={{color:'#FFFFFF',fontSize:16,fontWeight:600,lineHeight:19.5,marginLeft:75,marginTop:-55}} >Start Now</Text>
            </View>


        </SafeAreaView>
    )
}

export default New

const styles=StyleSheet.create({
    area:{
        flex:1,
        backgroundColor:"#152B79",

     
    },

})
