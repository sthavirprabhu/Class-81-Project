import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Profile from "../Screens/Profile"
import BottomTabNavigator from './BottomTabNavigator'
import {NavigationContainer} from '@react-navigation/native'

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Spectagram Dashboard" component={BottomTabNavigator}/>
          <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}