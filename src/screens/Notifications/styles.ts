import {StyleSheet} from 'react-native';

import {FontSize, hp, wp} from '../../utils/responsive';
import {Colors} from '../../utils/app_colors';
import fonts from '../../utils/fonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal: wp(4),
  },
  appBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
  },
  todayText: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.DarkGrey,
  },
  pickupBox: {
    width: '100%',
    // height: hp(8),
    backgroundColor: Colors.lightGrey,
    borderRadius: wp(2.5),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    marginVertical: hp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationTitle: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
  },
  notificationContent: {
    width:wp(60),
    fontSize: FontSize(13),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.DarkGrey,
  },
  notificationDateTime: {
    fontSize: FontSize(10),
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.lightGreyI,
  },
});
export default styles;
