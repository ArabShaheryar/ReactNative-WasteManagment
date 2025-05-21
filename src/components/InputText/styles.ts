
import {StyleSheet} from 'react-native';
import { Colors } from '../../utils/app_colors';
import { FontSize, hp, wp } from '../../utils/responsive';
import fonts from '../../utils/fonts';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.lightGrey,
    marginTop: hp(2),
    // marginTop: '2%',
    height: hp(8),
    // justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
  },
  text: {
    fontSize: FontSize(14),
    // padding: 5,
    // width: wp(83),
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.TextColor,
    marginLeft:wp(6)
    // backgroundColor:'red'
  },
  imageLeftContainer: {
    height: hp(4),
    width: wp(4),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    height: hp(4),
    width: wp(4),
    justifyContent: 'center',
    right: '1%',
    position: 'absolute',
    // marginRight: '2%',
    // alignSelf: 'center',
    // marginVertical: '4%',
  },
});

export default styles;
