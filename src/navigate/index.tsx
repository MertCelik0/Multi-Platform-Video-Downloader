import * as React from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Facebook from '../screens/Platforms/Facebook/HomeScreen'
import Instagram from '../screens/Platforms/Instagram/HomeScreen'
import Youtube from '../screens/Platforms/Youtube/HomeScreen'
import TikTok from '../screens/Platforms/Tiktok/HomeScreen'
import WhatsApp from '../screens/Platforms/Whatsapp/HomeScreen'

export default function App() {
    return (
      <NavigationContainer>
        <DrawerNavigatior />
      </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();

function DrawerNavigatior() {
  return (
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ 
         headerStyle: {backgroundColor: 'white'},
         headerTintColor: 'black',
         drawerActiveBackgroundColor: 'purple',
         drawerActiveTintColor: 'white'
         }}>
        <Drawer.Screen name="Home" component={TabNavigator} options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="user" color={color} size={20} />
          ),
        }}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="gear" color={color} size={20} />
          ),
        }}/>
      </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{ 
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: 'white'
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'black'
        }}>
        <Tab.Screen name="Home" component={StackNavigator} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}/>
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
  <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Facebook"
        component={Facebook}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Instagram"
        component={Instagram}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Youtube"
        component={Youtube}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="TikTok"
        component={TikTok}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="WhatsApp"
        component={WhatsApp}
        options={{ headerShown: false }}
      />
  </Stack.Navigator> 
  );
}

/*
  <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={20} />
          ),
        }}/>
*/

