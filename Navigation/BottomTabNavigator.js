import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CreatePost from '../Screens/CreatePost'
import Feed from '../Screens/Feed'

const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{
  render(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Feed" component={Feed}/>
          <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    )
  }
}