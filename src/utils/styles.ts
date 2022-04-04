import {
    getBottomSpace,
    getStatusBarHeight,
    isIphoneX,
} from 'react-native-iphone-x-helper';
import {StatusBar} from 'react-native';

export const statusBarHeight = isIphoneX()
    ? getStatusBarHeight() + 20
    : (StatusBar.currentHeight || 14) + 16;

export const bottomSpaceHeight = isIphoneX() ? getBottomSpace() + 10 : 16;