import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
  ScrollView, FlatList } from 'react-native'

const width = Dimensions.get("screen").width

export default class App extends React.Component {
  render() {
    const fotos = [
      { id: 1, usuario: "Isabela" },
      { id: 2, usuario: "Matheus" } ]
    return (
      <FlatList
        style={ styles.container }
        keyExtractor={ item => item.id }
        data ={fotos}
        renderItem={ ({item}) =>
            <View>
              <View style={ styles.cabecalho }>
                <Image source={ require("./resources/img/foto1.png") } style={ styles.fotoDePerfil }/>
                <Text>{ item.usuario }</Text>
              </View>
              <Image source={ require("./resources/img/foto1.png") } style={ styles.foto }/>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10, 
    flexDirection: "row", 
    alignItems: "center"
  },
  fotoDePerfil: {
    width: 40, 
    height: 40, 
    marginRight: 10, 
    borderRadius: 20 
  },
  foto: {
    width: width, 
    height: width
  }
})
