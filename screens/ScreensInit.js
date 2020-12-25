import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Editable from './Editable'
import DrawerContent from '../components/DrawerContent';
import Checkboxes from '../components/Checkboxs'
import Welcomes from './Welcomes'
import Curbside from './Curbside'
 import Loader from '../components/Loader'
import Arrived from '../components/Arrived'
import Delivered from '../components/Delivered'
import InventoryStatus from './InventoryStatus'
import Table from './Table'
import SignIn from './SignIn'
import Register from './Register'
 import Boxes from '../components/Boxes';
 import Splash from './SplashScreen';
 import THButton from './THButton';
import Comparision from './Comparision';
import Order from './Order';
import Patient from './Patient'
import Discard from './Discard';
import YourRecording from './YourRecording'
import RestDialogBox from '../components/RestDialogBox'
import SignUp from './SignUp'
import ForgetP from './ForgetP'
import Modals from '../model/Modals'
import Garmins from '../components/Garmins'
const { width } = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptionStyle = {
  headerTransparent: true,
  headerTitle: null,
  headerLeft: null,
};
const StackSplash = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={
        {
          headerTransparent: true,
          headerTitle: null,
          headerLeft: null,
        }
      }>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}

const StackRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Table'
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home1" component={Splash} />
      <Stack.Screen name="Modals" component={Modals} />
      <Stack.Screen name="InventoryStatus" component={InventoryStatus} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Table" component={Table} />
      <Stack.Screen name="ForgetP" component={ForgetP} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Arrived" component={Arrived} />
      <Stack.Screen name="Welcomes" component={Welcomes} />
      <Stack.Screen name="Editable" component={Editable} />
      <Stack.Screen name="Order" component={Order} />

    </Stack.Navigator>
  );
}
const SettingStackNavigator = (navigation) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Splash"
      drawerPosition="left"
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{ backgroundColor: '#fff', width: (width * .85) }}
      drawerContentOptions={{
        activeTintColor: '#60f',
        inactiveTintColor: '#000',
      }}
    >
      <Drawer.Screen name="Splash" component={StackSplash}
        options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Home" component={StackRoutes} />
      <Drawer.Screen name="Setting" component={SettingStackNavigator} />
    </Drawer.Navigator>
  );
}


export default () => {
  return <DrawerNavigator />
}