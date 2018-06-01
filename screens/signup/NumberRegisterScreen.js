import React from 'react';
import {Text, View, Button, TextInput, StyleSheet, Platform, Dimensions, Image } from 'react-native';
import { Constants } from 'expo';
import I18n from '../.././i18n';
import Colors from '../../constants/Colors';

export default class NumberRegisterScreen extends React.Component {
	constructor(props){
      super(props);
      this.state = {time : 60, showText : false};
          
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );      
    }

    tick(){
      if(this.state.time > 1){
        this.setState(previousState => {
          return { time: previousState.time - 1 };
        });
      }
      else {
        this.setState(previousState => {
          return { showText: !previousState.showText };
        });
        clearInterval(this.timerID);
      }
    }
    static navigationOptions = ({ navigation }) => ({
      title: I18n.t('number_registration'),
      headerTitleStyle : {color: Colors.navigationColor},      
      headerStyle:{
          backgroundColor: 'white'
      },
      headerRight: (
        <Text style={styles.nextButton} onPress={() => navigation.navigate('NewProfile')}>{I18n.t('next')}</Text>
      ),
    });

    onTextInputChange() {
      console.log("toto"); 
    }

    
      
    render(){        
        return(
          <View style={styles.container}>                        
              <Text style={styles.title}>{I18n.t('number_register_title')}</Text>
              <Text style={styles.desc}>{I18n.t('number_register_desc')}</Text>
              <View style={styles.container2}>                
                <TextInput style={styles.input}                
                        selectionColor={'green'}              
                        selectTextOnFocus                        
                        underlineColorAndroid={'#000000'}
                        onChange = {this.onTextInputChange}              
                />
              </View>
              {!this.state.showText && <Text style={styles.title}>{this.state.time}</Text>}
              {this.state.showText && <Text style={styles.title}>Request for code</Text>}            
          </View>  
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',    
    alignItems: 'center'
  },
  container2: {
    flexDirection: 'row',    
    backgroundColor: 'white',    
    alignItems: 'center',    
  },  
  title: {    
    paddingTop: 10,        
    fontSize: 15,
    fontWeight: 'bold',
    ...Platform.select({
        ios: { fontFamily: 'Arial', }, 
        android: { fontFamily: 'Roboto' }
   })
  },
  desc: {    
    padding : 10,    
    fontSize: 13,    
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