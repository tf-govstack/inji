import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { authRoutes, baseRoutes } from '../routes';
import { useAppLayout } from './AppLayoutController';
import { Icon } from 'react-native-elements';
import { Theme } from '../components/ui/styleUtils';
import { StatusBar } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppLayout: React.FC = () => {
  const controller = useAppLayout();

  const options: NativeStackNavigationOptions = {
    title: '',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerBackVisible: false,
  };

  return (
    <NavigationContainer>
      <StatusBar animated={true} barStyle="dark-content" />
      <Navigator initialRouteName={baseRoutes[0].name} screenOptions={options}>
        {baseRoutes.map((route) => (
          <Screen key={route.name} {...route} />
        ))}
        {controller.isAuthorized &&
          authRoutes.map((route) => <Screen key={route.name} {...route} />)}
      </Navigator>
    </NavigationContainer>
  );
};
