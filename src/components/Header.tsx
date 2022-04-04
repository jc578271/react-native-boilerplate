import * as React from 'react';
import {memo} from 'react';
import {Text, StatusBar} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import styled from 'styled-components/native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {statusBarHeight} from '../utils/styles';

interface Props {
  navigation: NavigationProp<any>;
}

export const Header = memo(function ({navigation}: Props) {
  return (
    <Container>
      <Text>Header</Text>
    </Container>
  );
});

const Container = styled.View`
  padding-top: ${statusBarHeight}px;
`;
