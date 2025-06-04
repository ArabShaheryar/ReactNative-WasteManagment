import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/app_colors';
import fonts from '../../../utils/fonts';
import {wp, FontSize, hp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal: wp(4),
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  listContent: {
    padding: 16,
  },
   tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: hp(1),
      backgroundColor: 'white',
      marginTop: hp(1.5),
    },
    tab: {
      paddingHorizontal: wp(2.2),
      paddingVertical: hp(0.5),
      backgroundColor: Colors.lightGrey,
      borderRadius: hp(0.5),
    },
    selectedTab: {
      backgroundColor: Colors.PrimaryColor,
      borderRadius: hp(0.5),
    },
    tabText: {
      fontSize: FontSize(12),
      fontFamily: fonts.Satoshi.Medium,
      color: Colors.lightGreyI,
    },
    selectedTabText: {
      fontSize: FontSize(12),
      fontFamily: fonts.Satoshi.Medium,
      color: Colors.Whitecolor,
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
   fontFamily:fonts.Satoshi.Medium
  },
   fab: {
    position: 'absolute',
    right: 40,
    bottom: 40,
   },
   fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
export default styles;