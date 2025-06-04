import {StyleSheet} from 'react-native';
import { FontSize } from '../../utils/responsive';
import fonts from '../../utils/fonts';
import { Colors } from '../../utils/app_colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    alignContent: 'center',
    paddingTop: '8%',
    backgroundColor: 'transparent',
  },
  leftIconStyle: {
    // marginLeft: WP(20),
    // height: 20,
  },
  rightIconStyle: {
    // marginRight: 20,
  },
  textStyle: {
    fontSize: FontSize(20),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.TextColor,
  },
});

export default styles;
