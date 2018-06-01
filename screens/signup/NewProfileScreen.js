import React from 'react';
import {Text, View, Button, TextInput, StyleSheet, Platform, Dimensions, Image, Picker, TouchableOpacity } from 'react-native';
import { Constants, ImagePicker } from 'expo';
import I18n from '../.././i18n';
import { EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { ActionSheet, ActionSheetItem } from 'react-native-action-sheet-component';
import Colors from '../../constants/Colors';
import CameraScreen from './CameraScreen';

const checkedIcon = <Ionicons name="ios-checkmark-outline" size={30} />;

export default class NewProfileScreen extends React.Component {
	constructor(props){
      super(props); 
      this.state = {
          image: null, language : null, sheetView : false, selectedItems: ['item2'], hasCameraPermission : null         
        }; 
    }

    static navigationOptions = ({ navigation }) => ({
      title: I18n.t('new_profile'),
      headerTitleStyle : {color: Colors.navigationColor},      
      headerStyle:{
          backgroundColor: 'white'
      },
      headerRight: (
        <Text style={styles.nextButton} onPress={() => navigation.navigate('Main')}>{I18n.t('next')}</Text>
      ),
    });

    checkCamera(){
      this.props.navigation.navigate('Test');
    }

     
    showBottomActionSheet = () => {
      this.bottomActionSheet.show();
    }
  
    onChange = (value, index, values) => {
      console.log(values);
      this.setState({ selectedItems: values });
    }
  
    onItemPress = (value) => {
      console.log('Press: value -> ', value);
    }

    onTextInputChange() {
      console.log("toto"); 
    }
    
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({          
          aspect: [4, 3],
          allowsEditing: true
        });
        
        console.log("download img "+ this.state.image);
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
    };

    render() {
        let { image } = this.state; 
        let { hasCameraPermission } = this.state;
        if(hasCameraPermission == null || !hasCameraPermission) {             
        return(
          <View style={styles.container}>
              {image && <Image source={{ uri: image }} style={styles.profileImg} /> }
              {!image && <FontAwesome name="user-circle" style={styles.profileIcon} color="green" size={100} onPress={this.showBottomActionSheet} />}
              <View style={styles.container2}>                
                <TextInput style={styles.input}                
                        selectionColor={'green'}              
                        selectTextOnFocus                        
                        underlineColorAndroid={'#000000'}
                        onChange = {this.onTextInputChange}              
                />
              </View>                          
             
                <ActionSheet
                  ref={(actionSheet) => { this.bottomActionSheet = actionSheet; }}
                  position="bottom"
                  onChange={this.onChange}
                  multiple
                  showSparator={false}
                >
                  <ActionSheetItem
                    text="Share"
                    value="item1"
                    selectedIcon={checkedIcon}
                    icon={
                      <EvilIcons name="share-google" color="#4B8FF6" size={42} />
                    }
                    onPress={this._pickImage}
                  />
                  <ActionSheetItem
                    text="Delete"
                    value="item2"
                    selectedIcon={checkedIcon}
                    icon={
                      <EvilIcons name="trash" color="#fa4b4b" size={42} />
                    }
                    onPress={() => this.props.navigation.navigate('Camera')}
                  />
                </ActionSheet>        
          </View>  
        );
      }
      else {
        return (
          <CameraScreen/>
        );
      }
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',    
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',    
    backgroundColor: 'white',    
    alignItems: 'center',    
  },
  profileImg: {
    width: 200, 
    height: 200, 
    borderRadius: 100,
    margin: 5
  },
  profileIcon: {
    margin : 5
  },  
  input: {
    flex: 1,    
    fontSize: 20,
    height : 100,
    padding : 10,
    margin : 5
  },
  nextButton: {    
    color: Colors.navigationColor,
    paddingRight: 10,
    fontSize: 15
  }    
});
