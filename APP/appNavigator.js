import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './login';
import Employee from './employeeDetails';

const MainNavigator = createStackNavigator({
    Login: Login,
    Home: Employee,
    //Profile: {screen: ProfileScreen},
  });
  
  const AppNavigator = createAppContainer(MainNavigator);
  
  export default AppNavigator;