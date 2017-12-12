import React from 'react'
import { MaterialIcons, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
  ScrollView, 
  FlatList } from 'react-native'

import { TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

const width = Dimensions.get("screen").width

export default class NewPhoto extends React.Component { 
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
     }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
          return <View />;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={this.state.type}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        alignSelf: 'flex-start',
                        alignItems: 'center',
                        flexDirection: "row",
                      }}
                      onPress={() => {
                        this.setState({
                          type: this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                        });
                      }}>

                      <MaterialIcons name='switch-camera' size={50} style={{ color: "#ddd", marginLeft: 5, paddingTop: 22 }} />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                        flex: 1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        }}
                        onPress={() => { console.log("TIRANDO FOTO (OU NÃO)") }}>

                        <MaterialCommunityIcons name='camera-iris' size={50} style={{ color: "#ddd", marginLeft: 5, paddingBottom: 15 }} />
                    </TouchableOpacity>
                </View>
                </Camera>
              </View>
            )
        }
    }
}