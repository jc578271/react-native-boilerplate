import * as React from 'react';
import {memo, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  BackHandler,
  Keyboard,
  Platform,
  ToastAndroid,
} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {bottomSpaceHeight, statusBarHeight} from '../utils/styles';
import styled from 'styled-components/native';

interface Props {
  mainRoute: RouteProp<any>;
  state: any;
  descriptors: any;
}

export const Footer = memo(({descriptors, state, mainRoute}: Props) => {
  const navigation = useNavigation<any>();
  // console.log(
  //   'state: ',
  //   state.routes.map(item => descriptors[item.key].route.name),
  //   state.index,
  // );
  const [isKeyboardShown, setKeyBoardShown] = useState(false);
  const [exitApp, setExitApp] = useState(0);

  useEffect(() => {
    // Hide bottom tab when keyboard shown
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () =>
      setKeyBoardShown(true),
    );
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () =>
      setKeyBoardShown(false),
    );

    // Exit app handler
    const mainRouteName = getFocusedRouteNameFromRoute(mainRoute) || 'TabStack';
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (
          Platform.OS != 'ios' &&
          mainRouteName == 'TabStack' &&
          state.index == 0
        ) {
          setTimeout(() => setExitApp(0), 2000);
          if (exitApp == 0) {
            setExitApp(prev => prev + 1);
            ToastAndroid.show('tab back again to exit', ToastAndroid.SHORT);
          } else if (exitApp == 1) {
            BackHandler.exitApp();
          }
          return true;
        }
      },
    );

    return () => {
      backHandler.remove();
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [exitApp, mainRoute, state.index]);

  return (
    !isKeyboardShown && (
      <Container>
        <Text>Footer</Text>
        {state.routes.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate(descriptors[item.key].route.name)
            }>
            <Text>
              {descriptors[item.key].route.name}{' '}
              {index == state.index && 'current'}
            </Text>
          </TouchableOpacity>
        ))}
      </Container>
    )
  );
});

const Container = styled.View`
  padding-bottom: ${bottomSpaceHeight}px;
`;
