import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from "react-native"

const App = ():JSX.Element =>{
  const isDarkMode = useColorScheme()==='dark'
    return(
      
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText:styles.darkText}>
          Hello World
        </Text>
      </View>
    
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center'
  },
  whiteText:{
    color:'#ffffff'
  },
  darkText:{
    color:'purple'
  }
})

export default App