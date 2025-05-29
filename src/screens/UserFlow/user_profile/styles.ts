import {StyleSheet} from 'react-native';
import {FontSize, hp, wp} from '../../../utils/responsive';
import {Colors} from '../../../utils/app_colors';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal: wp(4),
  },
  profilePhoto: {
    height: hp(20),
    width: 'auto',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.DarkGrey,
    marginTop: hp(5),
    paddingHorizontal: 12,
    paddingVertical: 12,
    // flexDirection: 'row',
    marginBottom: 20,
  },
  UserName: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    lineHeight: 17.07,
  },
  UserEmail: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.blackColorNetural,
    lineHeight: 17.07,
    textAlign: 'center',
  },
  generView: {
    // height: hp(16),
    backgroundColor: Colors.lightGrey,
    // paddingVertical:hp(4),
    // paddingVertical:hp(10),
    borderRadius: hp(1),
    paddingVertical: hp(3),
    paddingHorizontal: hp(2),
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: FontSize(16),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginLeft: wp(2),
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGreyII,
    width: '100%',
    marginVertical: hp(2),
  },
  headinText:{
    fontSize: FontSize(16),
    color: Colors.lightGreyI,
    fontFamily: fonts.Satoshi.Medium,
    paddingBottom:hp(2)
  }
});
export default styles;
