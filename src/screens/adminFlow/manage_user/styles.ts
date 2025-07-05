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
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rowContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
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
});
export default styles;
