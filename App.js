import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Transaction from './Screens/transaction';
import Search from './Screens/search';


export default class App extends React.Component {
  render(){
    return (
         <AppContainer/>
       );
  }
  
}

const tabNavigator = createBottomTabNavigator({
  Transaction : {screen : Transaction},
  Search : {screen : Search}
})

const AppContainer = createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
