import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    Dimensions,
    ScrollView, 
    FlatList,
    Button,
    TouchableOpacity } from 'react-native'

export default class Profile extends React.Component { 
    render() {
        return(
            <View>
                <View style={ styles.wrapper } >
                    <Image style={ styles.photoProfile } source={ require("../../resources/img/profile.jpg") }/>
                    <View style={ styles.column }>
                        <View style={ styles.row }>
                            <Text>90</Text>
                            <Text>589</Text>
                            <Text>892</Text>
                        </View>
                        <View style={ styles.row }>
                            <Text>publicações</Text>
                            <Text>seguidores</Text>
                            <Text>seguindo</Text>
                        </View>  
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {}}>
                            <Text>Editar seu perfil</Text>
                        </TouchableOpacity>  
                    </View>
                </View>
                <View style={ styles.info }>
                    <Text>Isabela Neri</Text>
                    <Text>Brazil</Text>
                    <Text>21 years old</Text>
                    <Text>https://www.facebook.com/IsabelaNerii</Text>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    photoProfile: {
        width: 90,
        height: 90,
        borderRadius: 45,
        margin: 20,
        marginTop: 40
    },
    wrapper: {
        flexDirection: "row"
    },
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: "column",
        marginTop: 55
    },
    button: {
        backgroundColor: "white"
    },
    info: {
        margin: 20,
        marginTop: 5
    }
})