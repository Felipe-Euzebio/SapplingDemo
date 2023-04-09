import React, { Component } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Homepage, AboutUs } from './src/components/NavTabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

class App extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar 
            style="light" 
            backgroundColor="#000"
          />
          <Image 
            source={require('./src/assets/images/logo.png')} 
            style={styles.logo}
          />
          <Progress.Bar 
            indeterminate 
            color='#fff'
          />
        </SafeAreaView>
      );
    }

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={Homepage} 
            options={{
              tabBarIcon: () => (
                <Ionicons name="home" size={25}/>
              ),
              headerStyle: {
                backgroundColor: '#228B22',
                elevation: 1,
                shadowColor: '#000'
              },
              headerTintColor: '#fff',
            }}
          />
          <Tab.Screen 
            name="Sobre o App" 
            component={AboutUs} 
            options={{
              tabBarIcon: () => (
                <Ionicons name="information-circle" size={25}/>
              ),
              headerStyle: {
                backgroundColor: '#228B22',
                elevation: 1,
                shadowColor: '#000'
              },
              headerTintColor: '#fff',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228B22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  }
});

