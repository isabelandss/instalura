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

                <Camera style={ styles.camera } type={this.state.type}>

                  <View style={ styles.areaBotaoFlip }>
                    <TouchableOpacity style={ styles.botaoFlip }
                      onPress={() => {
                        this.setState({
                          type: this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                        });
                      }}>
                      <MaterialIcons name='switch-camera' size={50} style={ styles.iconFlip } />
                    </TouchableOpacity>
                  </View>

                  <View style={ styles.areaBotaoTake }>
                    <TouchableOpacity style={ styles.botaoTake } onPress={() => { console.log("TIRANDO FOTO (OU NÃO)") }}>
                        <MaterialCommunityIcons name='camera-iris' size={50} style={ styles.iconTake } />
                    </TouchableOpacity>
                  </View>
                </Camera>

              </View>
            )
        }
    }
}


const styles = StyleSheet.create({
  camera: {
    flex: 1 
  },
  areaBotaoFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  botaoFlip: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: "row",
  },
  areaBotaoTake: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  botaoTake: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  iconTake: { 
    color: "#ddd", 
    marginLeft: 5, 
    paddingBottom: 15 
  },
  iconFlip: {
    color: "#ddd", 
    marginLeft: 5, 
    paddingTop: 22
  },
  wrapper: {
    flex: 1 
  }
})