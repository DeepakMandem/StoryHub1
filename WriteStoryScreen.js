import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import AppHeader from '../AppHeader'


export default class WriteStoryScreen extends React.component() {
    render(){
      <View>
        <TouchableOpacity
         style={[styles.button, { backgroundColor: 'black' }]}>
           <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            
          }}
          value={this.state.text}
        />
       
     </View>
  
  return (

    
     <AppHeader /> 

     
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 50,
    width: 300,
    height: 50,
  },
});
