import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <>
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image  style={styles.cardImage}
         source={{
            uri:'https://image.api.playstation.com/cdn/EP0002/CUSA05282_00/JhIXa8se54KKNhggEahiO0Oz78IITOGF.png'
        }}
        />
    
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Ronaldo</Text>
            <Text style={styles.cardLabel}>Best Player</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non corporis quis voluptate quas tempore nobis praesentium iste, qui officia ea in blanditiis.</Text>
            <Text style={styles.cardFooter}>12 mins read</Text>
        </View>
      </View>
    </View>  
  </>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:15,
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        width:'90%',
        height:500,
        borderRadius:6,
        
        marginHorizontal:20,
        marginVertical:12, 
    },
    cardElevated:{
        backgroundColor:'#001d0c',
        elevation:10,
        shadowOffset:{
            width:100,
            height:100
        },
        
    },
    cardImage:{
        height:320,
        // width:100
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:8
    },
    cardLabel:{
        color:'white',
        fontSize:16,
        marginBottom:8
    },
    cardDescription:{
        color:'white',
        fontSize:14,
        marginBottom:12
    },
    cardFooter:{
        color:'white',
    }
})