import {StyleSheet} from 'react-native';
import { Colors } from '../../utils/app_colors';
import { FontSize, hp, wp } from '../../utils/responsive';
import fonts from '../../utils/fonts';


const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.PrimaryColor,
    borderRadius: wp(2),
  },
  textStyle: {
    fontSize: FontSize(16),
    color: Colors.Whitecolor,
    fontFamily: fonts.Satoshi.Medium,
    // lineHeight: wp(24),
  },
  imageContainer: {
    height: hp(24),
    width: wp(24),
    justifyContent: 'center',
    alignSelf: 'center',
    // marginVertical: '4%',
    // marginLeft: '3%',
  },
});

export default styles;
