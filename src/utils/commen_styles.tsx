import { StyleSheet } from 'react-native';
import { Colors } from './app_colors';
import { hp, wp } from './responsive';
// import {COLORS} from '.';

export const CommenStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  bodyWithPadding: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: wp(20),
   paddingTop:hp(20)
  },
  flex_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
//   flex_parent1: {
//     flex: 1,
//   },
//   Primary_Parent: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: heightPercentageToDP(4.5),
//   },
//   default_style: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: widthPercentageToDP(3),
//     paddingTop: heightPercentageToDP(4),
//   },
//   flex_center: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   between: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   around: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   flex_between: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },
//   flex_between1: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   flex_between_Column: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },

});
