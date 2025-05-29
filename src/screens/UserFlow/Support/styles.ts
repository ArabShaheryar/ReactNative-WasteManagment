import {StyleSheet} from 'react-native';

import {FontSize, height, hp, wp} from '../../../utils/responsive';
import {Colors} from '../../../utils/app_colors';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal: wp(4),
  },
  quickActionBox: {
    width: wp(43),
    height: hp(12),
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  actionText: {
    fontSize: FontSize(15),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColorNetural,
    marginVertical: hp(0.5),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImage: {
    width: wp(10),
    height: hp(5),
    borderRadius: hp(10),
  },
  title: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
  },
    complainText: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.grayDarkerColor,
    marginTop:hp(1)
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    // marginTop: 8,
  },
  statusText: {
    color: 'white',
    fontSize: FontSize(10),
    fontFamily: fonts.Satoshi.Medium,
  },
  detail: {
    fontSize: FontSize(14),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginBottom: 4,
  },

  dateText: {
    alignSelf: 'flex-end',
    fontSize:FontSize(12),
    color: Colors.lightGreyI
    // paddingHorizontal: 8,
    // paddingVertical: 4,
    // borderRadius: 12,
    // marginTop: 8,
  },
    card: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ActionBox:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: hp(3),
          marginBottom:hp(2)
        }
});
export default styles;
