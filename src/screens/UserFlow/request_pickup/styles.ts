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
  dateTimeText: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    marginTop: hp(3),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 12,
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  closeButton: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.blackColorNetural,
  },
  propertyHeading: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
  },
  propertyItem: {
    paddingVertical: hp(1),
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
  detail: {
    fontSize: FontSize(14),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginBottom: 4,
  },
});
export default styles;
