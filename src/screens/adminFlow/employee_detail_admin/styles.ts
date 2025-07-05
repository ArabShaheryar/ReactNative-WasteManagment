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
  card: {
    height: hp(10),
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderRadius: 8,
    // padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: hp(2),
    paddingVertical: hp(1),
    paddingHorizontal:hp(1)
  },
  detail: {
    fontSize: FontSize(14),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginBottom: 4,
  },
  nameText: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Bold,
    fontWeight: '700',
    color: Colors.blackColorNetural,
  },
  dateTimeText: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    marginVertical: hp(1),
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGreyII,
    width: '100%',
    marginVertical: hp(1.5),
  },

  statusBadge: {
      alignSelf: 'flex-start',
      backgroundColor:'rgba(76, 175, 80, 0.15)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      // marginTop: 8,
    },
    statusText: {
      color: 'rgba(76, 175, 80, 1)',
      fontSize: FontSize(10),
      fontFamily: fonts.Satoshi.Medium,
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
       itemTextStyle: {
          fontSize: FontSize(14),
          fontFamily: fonts.Satoshi.Medium,
          color: Colors.blackColorNetural,
          fontWeight: '500',
          marginLeft: wp(1),
        },
          workcard: {
    backgroundColor: Colors.lightGrey,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: hp(1),
    paddingVertical: hp(2),
  },
    profilePhoto: {
    height: hp(10),
    width: 'auto',
    borderRadius: 10,
    // alignSelf: 'center',
    // alignItems: 'center',
    // backgroundColor: Colors.DarkGrey,
    // marginTop: hp(5),
   
    // paddingVertical: 12,
    // flexDirection: 'row',
    
  },
});
export default styles;
