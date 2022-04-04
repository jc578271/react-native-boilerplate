import * as React from 'react';
import {memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {LoginScreen} from './screens/LoginScreen';
import {TabScreen1} from './screens/TabScreen1';
import {TabScreen2} from './screens/TabScreen2';
import {DrawerScreen1} from './screens/DrawerScreen1';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {CustomDrawer} from './components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabStack = ({mainRoute}) => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        header: props => <Header navigation={navigation} {...props} />,
      }}
      tabBar={props => <Footer mainRoute={mainRoute} {...props} />}>
      <Tab.Screen name={'TabScreen1'} component={TabScreen1} />
      <Tab.Screen name={'TabScreen2'} component={TabScreen2} />
    </Tab.Navigator>
  );
};

const DrawerStack = () => {
  const route = useRoute();
  return (
    <Drawer.Navigator
      screenOptions={{drawerType: 'front'}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen options={{headerShown: false}} name={'TabStack'}>
        {props => <TabStack {...props} mainRoute={route} />}
      </Drawer.Screen>
      <Drawer.Screen name={'DrawerScreen1'} component={DrawerScreen1} />
    </Drawer.Navigator>
  );
};

export const Router = memo(function Router() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
          <Stack.Screen name={'DrawerStack'} component={DrawerStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
});
