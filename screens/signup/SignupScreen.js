import React from 'react';
import {Text, View, Button, TextInput, StyleSheet, Picker, Dimensions, Image } from 'react-native';
import { Constants } from 'expo';
import I18n from '../.././i18n';
import Colors from '../../constants/Colors';

export default class SignupScreen extends React.Component {
	constructor(props){
      super(props);  
    }

    static navigationOptions = ({ navigation }) => ({
      title: I18n.t('registration'),
      headerTitleStyle : {color: Colors.navigationColor},
      headerStyle:{
          backgroundColor: 'white'
      },
      headerRight: (
        <Text style={styles.nextButton} onPress={() => navigation.navigate('NumberRegister')}>{I18n.t('next')}</Text>
      ),
    });

    onTextInputChange() {
      console.log("toto"); 
    }

    renderImage() {            
      image = (<Image style={styles.image}
                        source={require('../../assets/images/robot-dev.png')}/>);
      return image;
    }
      
    render(){
      let image = this.renderImage();
        return(
          <View style={styles.container}>
            {image}
            <View style={styles.numberContainer}>                          
              <TextInput style={styles.text}                            
                editable={false}
                selectTextOnFocus={false}
                underlineColorAndroid={'#000000'}
                value="+994"
              />
              <TextInput style={styles.input}
                placeholder={I18n.t('number')}
                selectTextOnFocus
                keyboardType={'numeric'}              
                selectionColor={'green'}              
                onChange = {this.onTextInputChange}              
              />                        
            </View>
          </View>  
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',    
    backgroundColor: 'white',    
    alignItems: 'center'    
  },
  numberContainer: {
    flex: 1,
    flexDirection: 'row',    
    backgroundColor: 'white'    
  },
  text: {
    flex: 1,
    height: 50,
    marginTop: 18,
    marginLeft: 10,
    fontSize: 17
  }, 
  input: {
    flex: 7,
    height: 50,
    marginTop: 18,
    fontSize: 17,
    paddingLeft: 5    
  },
  nextButton: {    
    color: Colors.navigationColor,
    paddingRight: 10,
    fontSize: 15
  },
  image: {
    resizeMode: 'cover',    
    padding: 10,
    marginTop: 10
  },
});