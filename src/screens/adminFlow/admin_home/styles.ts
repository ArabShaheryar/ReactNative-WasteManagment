import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/app_colors';
import {FontSize, hp, wp} from '../../../utils/responsive';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    // ,
  },
  appBar: {
    height: hp(20),
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: wp(4),
  },
  appBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
  },
  userImage: {
    height: hp(4),
    width: hp(4),
    borderRadius: hp(2),
  },
  quickActionBox: {
    width: wp(28),
    height: hp(16),
    backgroundColor: Colors.lightGrey,
    // alignItems:'center',
    // justifyContent:'center',
    borderRadius: 10,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
  },
  workStatusText: {
    fontSize: FontSize(12),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.DarkGrey,
    fontWeight: '500',
    marginTop: hp(3),
  },
  viewAllBox: {
    height: hp(4),
    alignItems: 'center',
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
    borderRadius: 6,
    backgroundColor: Colors.lightGrey,
  },
  seeAllText: {
    fontSize: FontSize(12),
    fontWeight: '400',
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.DarkGrey,
  },
  todayJobsText: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    fontWeight: '700',
    marginVertical: hp(2),
  },
  card: {
    backgroundColor: Colors.lightGrey,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: hp(1),
    paddingVertical: hp(2),
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGreyII,
    opacity: 0.5,
    width: '96%',
    marginVertical: hp(1.5),
  },
  itemTextStyle: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColorNetural,
    fontWeight: '500',
    marginLeft: wp(1),
  },
  CountText: {
    fontSize: FontSize(34),
    fontFamily: fonts.Satoshi.Bold,
    fontWeight: '700',
    color: Colors.blackColorNetural,
    textAlign: 'center',
  },
  CountTextAll: {
    fontSize: FontSize(28),
    fontFamily: fonts.Satoshi.Medium,
    fontWeight: '500',
    color: Colors.DarkGrey,
    textAlign: 'center',
    marginLeft:wp(23),
    marginTop:-30
  },
  totalCompletedTaskText: {
       fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    fontWeight: '500',
    color: Colors.DarkGrey,
    textAlign: 'center',
    marginTop:hp(0.5)
  },
  manageRequestText: {
     fontSize: FontSize(12),
    fontFamily: fonts.Satoshi.Medium,
    fontWeight: '500',
    color: Colors.PrimaryColor,
    textAlign: 'center',
    textDecorationLine:'underline',
    marginTop:hp(0.5)
  },
});
export default styles;
