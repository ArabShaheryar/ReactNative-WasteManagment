import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/app_colors';
import {FontSize, hp, wp} from '../../../utils/responsive';
import fonts from '../../../utils/fonts';

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
  title: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
  },
  detail: {
    fontSize: FontSize(14),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginBottom: 4,
  },
  letsGoText: {
    fontSize: FontSize(28),
    color: Colors.blackColorNetural,
    fontWeight: '700',
    fontFamily: fonts.Satoshi.Bold,
    marginTop: hp(2),
  },
  shiftTime: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    fontWeight: '500',
    color: Colors.DarkGrey,
    marginTop: hp(1),
  },
  todayJobsText: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    fontWeight: '700',
    marginVertical: hp(2),
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    // height: '29%',
    width: '100%',
    backgroundColor: Colors.Whitecolor,
    borderRadius: 8,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  logInAs: {
    fontSize: FontSize(18),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    marginVertical: hp(1),
  },
  contentText: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColorNetural,
    marginVertical: hp(1),
  },
  propertyText: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  propertyItem: {
    paddingVertical: hp(1),
  },
});
export default styles;
