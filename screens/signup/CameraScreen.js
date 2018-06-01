import React from 'react';
import {Text, View, Button, TextInput, StyleSheet, Platform, Dimensions, Image, Picker, TouchableOpacity } from 'react-native';
import { Constants, ImagePicker, Camera, Permissions} from 'expo';

export default class CameraScreen extends React.Component {
	constructor(props){
      super(props); 
      this.state = {
          hasCameraPermission: null,
          type: Camera.Constants.Type.back,
          cameraAcces : false
        }; 
    }

    static navigationOptions = {
      header: null,
    };

    async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    } 

    render() {
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
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
     
    }

}
