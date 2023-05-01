import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Blue</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:15,
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:8, 
        width:100,
        height:100,
        borderRadius:8
    },
    elevated:{
        backgroundColor:'gray'
    },
})