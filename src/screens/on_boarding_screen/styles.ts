import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/app_colors';
import {FontSize, hp, wp} from '../../utils/responsive';
import fonts from '../../utils/fonts';

const styles = StyleSheet.create({
  obText: {
    fontSize: FontSize(24),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    fontWeight: '700',
    marginTop: hp(1),
  },
  obTextContent: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.DarkGrey,
    marginTop: hp(1),
    // marginBottom: hp(4)
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: wp(5),
    // alignItems: 'center',
    paddingBottom: hp(5),
  },
  newUser: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.blackColorNetural,
    textAlign: 'center',
    marginTop: hp(6),
  },
  newUserSpan: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.DarkGrey,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    height: '29%',
    width: '100%',
    backgroundColor: Colors.Whitecolor,
    borderRadius: 8,
    //   paddingVertical: hp(20),
      paddingHorizontal: wp(4),
  },
  logInAs: {
    fontSize: FontSize(18),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    marginVertical:hp(2)
  },
  roleBox: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 12,
    width: '43%',
    height: hp(8),
    borderColor: Colors.lightGreyII,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hp(2),
    borderWidth:1,
  },
  roleText:{
    fontSize:FontSize(15),
    fontFamily: fonts.Satoshi.Medium,
    fontWeight:'500',
    color:Colors.DarkGrey,
    marginLeft:wp(2)
  }
});

export default styles;
