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
    
import { MaterialIcons, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

export default class Profile extends React.Component { 
    render() {
        return(
            <View>
                <View style={{flexDirection: "row"}}>
                    <View style={{ flexDirection: "column", marginRight: 0, marginTop: 18}}>
                        <Image style={ styles.photoProfile } source={ require("../../resources/img/profile.jpg") }/>
                    </View>
                    <View style={{ flexDirection: "column", marginTop: 55, marginLeft: 0}}>    
                        <View style={{ flexDirection: "row", justifyContent: "space-around"}}>
                            <View style={{ flexDirection: "column", marginRight: 8, marginLeft: 10}}>
                                <Text style={{fontWeight: 'bold', textAlign: "center", fontSize: 20}}>90</Text>
                                <Text style={{marginLeft: 0, textAlign: "center", color: "#A9A9A9"}}>publicações</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 4, marginRight: 8}}>
                                <Text style={{fontWeight: 'bold', textAlign: "center", fontSize: 20}}>538</Text>
                                <Text style={{marginLeft: 0, textAlign: "center", color: "#A9A9A9"}}>seguidores</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 4, marginRight: 4}}>
                                <Text style={{fontWeight: 'bold', textAlign: "center", fontSize: 20}}>364</Text>
                                <Text style={{marginLeft: 0, textAlign: "center", color: "#A9A9A9"}}>seguindo</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around"}}>
                            <TouchableOpacity
                                style={{backgroundColor: "white", marginTop: 10, borderColor: "#ccc", borderRadius: 4, borderWidth: 1}}
                                onPress={() => {}}>
                                <Text style={{ fontWeight: "bold", paddingTop: 3, paddingBottom: 3, paddingLeft: 60, paddingRight: 60}}>Editar seu perfil</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={ styles.info }>
                        <Text style={{fontWeight: 'bold'}}>Isabela Neri</Text>
                        <Text>Brazil</Text>
                        <Text>21 years old</Text>
                        <Text>www.facebook.com/IsabelaNeri</Text>
                    </View>
                </View>

                <View style={{flexDirection: "row", borderWidth: 0.5, borderColor: "#D3D3D3", height: 55, justifyContent: "space-around"}}>
                    <View style={{ flexDirection: "column"}}>
                        <Ionicons name='ios-list' size={45} style={{ marginTop: 5 }} />
                    </View>
                    <View style={{ flexDirection: "column"}}>
                        <Ionicons name='ios-list' size={45} style={{ marginTop: 5 }} />
                    </View>
                    <View style={{ flexDirection: "column"}}>
                        <Ionicons name='ios-list' size={45} style={{ marginTop: 5 }} />
                    </View>
                    <View style={{ flexDirection: "column"}}>
                        <Ionicons name='ios-list' size={45} style={{ marginTop: 5 }} />
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    photoProfile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 20,
        marginRight: 10,
        marginLeft: 15,
        marginTop: 40
    },
    wrapper: {
        flexDirection: "row"
    },
    row: {
        flexDirection: "row"
    },
    rowSpace: {
        flexDirection: "row",
        justifyContent: "center",
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