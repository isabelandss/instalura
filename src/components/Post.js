import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
  ScrollView, FlatList,
  TouchableOpacity,
    TextInput } from 'react-native'

const width = Dimensions.get("screen").width

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foto: this.props.foto
        }
    }

    carregaIcone(likeada) {
        return likeada ? 
        require("../../resources/img/s2-checked.png") : 
        require("../../resources/img/s2.png")
    }

    like() {

        const { foto } = this.state;
        let novaLista = []

        if(!foto.likeada) {
            let novaLista = [
                ...this.likers,
                { login: "meuUsuario" }
            ]
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== "meuUsuario"
            })
        }

        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada,
            likers: novaLista
        }

        this.setState({ foto: fotoAtualizada })
    }

    exibeLIkes(likers) {
        if(likers.length <= 0 ) {
            return;
        }

        return(
            <Text style={ styles.like }>
            { likers.length } { likers.length > 1 ? "curtidas" : "curtida" }
            </Text>
        )
    }

    exibeLegenda(foto) {
        return(    
            <View style={ styles.comentario }>
                <Text style={ styles.tituloComentario }>{ foto.loginUsuario }</Text>
                <Text>{ foto.comentario }</Text>
            </View>
        )
    }

  render() {
      
    const { foto } = this.state;

    return (
        <View>
            <View style={ styles.cabecalho }>
                <Image source={{ uri: foto.urlPerfil } } style={ styles.fotoDePerfil }/>
                <Text>{ foto.loginUsuario }</Text>
            </View>
            <Image source={ { uri: this.props.foto.urlFoto } } style={ styles.foto }/>

            <View style={ styles.rodape }>
                <TouchableOpacity onPress={this.like.bind(this)}>
                    <Image style={ styles.botaoDeLike } source={this.carregaIcone(foto.likeada)}/>
                </TouchableOpacity>
                         
                {this.exibeLIkes(foto.likers)}
                {this.exibeLegenda(foto)}

                {foto.comentarios.map(comentario => 
                    <View style={ styles.comentario } key={ comentario.id }>
                        <Text style={ styles.tituloComentario } >{ comentario.login }</Text>
                        <Text>{ comentario.texto }</Text>
                    </View>
                )}

                <View style={ styles.novoComentario }>    
                    <TextInput style={ styles.input } 
                    placeholder="Adicione um comentário"/>

                    {<Image style={ styles.icon } source={ require("../../resources/img/send.png") }/>}
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  botaoDeLike: {
    marginBottom: 10,
    height: 35,
    width: 35
  },
  rodape: {
      margin: 10
  },
  like: {
    fontWeight: "bold"
  },
  comentario: {
      flexDirection: "row"
  },
  tituloComentario: {
      fontWeight: "bold",
      marginRight: 5
  }, 
  input: {
    flex: 1,
    height: 50      
  },
  icon: {
      width: 30,
      height: 30
  },

  novoComentario: {
      flexDirection: "row",
      alignItems: "center"
  }
})
