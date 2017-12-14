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
    TouchableOpacity,
    ActionSheetIOS,
    CameraRoll 
} from 'react-native'
    
import { 
    MaterialIcons, 
    Ionicons, 
    Entypo, 
    MaterialCommunityIcons 
} from '@expo/vector-icons'


export default class Profile extends React.Component { 
    render() {
        return(
            <ScrollView>
                    <View style={ styles._row }>

                        <View style={ styles.divPhoto }>
                            <Image style={ styles.photoProfile } source={ require("../../resources/img/profile.jpg") }/>
                        </View>

                        <View style={ styles.divInfo }>    
                            <View style={ styles.row }>
                                <View style={ styles.publicacao }>
                                    <Text style={ styles.number }>90</Text>
                                    <Text style={ styles.info }>publicações</Text>
                                </View>
                                <View style={ styles.seguidor }>
                                    <Text style={ styles.number }>538</Text>
                                    <Text style={ styles.info }>seguidores</Text>
                                </View>
                                <View style={ styles.seguindo }>
                                    <Text style={ styles.number }>364</Text>
                                    <Text style={ styles.info }>seguindo</Text>
                                </View>
                            </View>
                            <View style={ styles.row }>
                                <TouchableOpacity
                                    style={ styles.editProfile }
                                    onPress={() => {}}>
                                    <Text style={ styles.textEditProfile }>Editar seu perfil</Text>
                                </TouchableOpacity>  
                            </View>
                        </View>

                    </View>

                    <View style={ styles._row }>
                        <View style={ styles.description }>
                            <Text style={ styles.bold }>Isabela Neri</Text>
                            <Text>Brazil</Text>
                            <Text>21 years old</Text>
                            <Text>www.facebook.com/IsabelaNeri</Text>
                        </View>
                    </View>

                    <View style={ styles.tabs }>
                        <View style={ styles._column }>
                            <Ionicons name='ios-list' size={45} style={ styles.icons } />
                        </View>
                        <View style={ styles._column }>
                            <Ionicons name='ios-list' size={45} style={ styles.icons } />
                        </View>
                        <View style={ styles._column }>
                            <Ionicons name='ios-list' size={45} style={ styles.icons } />
                        </View>
                        <View style={ styles._column }>
                            <Ionicons name='ios-list' size={45} style={ styles.icons } />
                        </View>
                    </View>

                    <View style={ styles._row }>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto1.jpg") }/>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto2.jpg") }/>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto3.jpg") }/>
                    </View>
                    <View style={ styles._row }>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto4.jpg") }/>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto5.jpg") }/>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto6.jpg") }/>
                    </View>
                    <View style={ styles._row }>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto7.jpg") }/>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto8.jpg") }/>
                        <Image style={ styles.photo } source={ require("../../resources/img/foto9.jpg") }/>
                    </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    _row: {
        flexDirection: "row",
    },
    _column: { 
        flexDirection: "column"
    },
    row: { 
        flexDirection: "row", 
        justifyContent: "space-around" 
    },
    number: {
        fontWeight: 'bold', 
        textAlign: "center", 
        fontSize: 20
    },
    info:{
        marginLeft: 0, 
        textAlign: "center", 
        color: "#A9A9A9"
    },
    description: {
        margin: 20,
        marginTop: 5
    },
    divPhoto: { 
        flexDirection: "column", 
        marginRight: 0, 
        marginTop: 18
    },
    divInfo: { 
        flexDirection: "column", 
        marginTop: 55, 
        marginLeft: 0
    },
    tabs: {
        flexDirection: "row", 
        borderWidth: 0.5, 
        borderColor: "#D3D3D3", 
        height: 55, 
        justifyContent: "space-around"
    },
    icons: {
        marginTop: 5
    },
    publicacao: { 
        flexDirection: "column", 
        marginRight: 8, 
        marginLeft: 10
    },
    seguidor: { 
        flexDirection: "column", 
        marginLeft: 4, 
        marginRight: 8
    },
    seguindo: { 
        flexDirection: "column", 
        marginLeft: 4, 
        marginRight: 4
    },
    editProfile: {
        backgroundColor: "white", 
        marginTop: 10, 
        borderColor: "#ccc", 
        borderRadius: 4, 
        borderWidth: 1
    },
    textEditProfile: { 
        fontWeight: "bold", 
        paddingTop: 3, 
        paddingBottom: 3, 
        paddingLeft: 60, 
        paddingRight: 60
    },
    bold: {
        fontWeight: 'bold'
    },
    photoProfile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 20,
        marginRight: 10,
        marginLeft: 15,
        marginTop: 40
    },
    photo: {
        width: 120,
        height: 120,
    },
})