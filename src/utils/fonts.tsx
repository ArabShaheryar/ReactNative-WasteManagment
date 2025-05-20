import {Platform} from 'react-native';

export default {
  Satoshi: {
    Black: Platform.OS == 'android' ? 'Satoshi-Black' : 'Satoshi-Black',
    Medium: Platform.OS == 'android' ? 'Satoshi-Medium' : 'Satoshi-Medium',
    Regular: Platform.OS == 'android' ? 'Satoshi-Regular' : 'Satoshi-Regular',
    Light: Platform.OS == 'android' ? 'Satoshi-Light' : 'Satoshi-Light',
    Bold: Platform.OS == 'android' ? 'Satoshi-Bold' : 'Satoshi-Bold',
    // ExtraBold:
    //   Platform.OS == 'android' ? 'Poppins-ExtraBold' : 'Poppins-ExtraBold',
    // SemiBold:
    //   Platform.OS == 'android' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
  },
  Roboto: {
    Regular: Platform.OS == 'android' ? 'Roboto-Regular' : 'Roboto-Regular',
    Medium: Platform.OS == 'android' ? 'Roboto-Medium' : 'Roboto-Medium',
    Light: Platform.OS == 'android' ? 'Roboto-Light' : 'Roboto-Light',
    Bold: Platform.OS == 'android' ? 'Roboto-Bold' : 'Roboto-Bold',
  },
};
