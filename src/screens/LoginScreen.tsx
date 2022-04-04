import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {memo} from 'react';
import {Text, TouchableOpacity, StatusBar} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {statusBarHeight} from '../utils/styles';

export const LoginScreen = memo(function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerStack')}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </Container>
  );
});
const Container = styled.View`
  padding-top: ${statusBarHeight}px;
`;
