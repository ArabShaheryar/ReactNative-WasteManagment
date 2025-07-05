import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/app_colors";
import { FontSize, hp, wp } from "../../../utils/responsive";
import fonts from "../../../utils/fonts";


const styles = StyleSheet.create({
     body: {
        flex: 1,
        backgroundColor: Colors.Whitecolor
    },
    profileText: {
        fontSize: FontSize(22),
        color: Colors.blackColorNetural,
        fontFamily: fonts.Satoshi.Bold,
        fontWeight: '700',
        marginTop: hp(2)
    },
    profileInfo: {
        fontSize: FontSize(14),
        color: Colors.blackColorNetural,
        fontFamily: fonts.Satoshi.Regular,
        fontWeight: '400',
        marginTop: hp(1)
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
    contentText:{
         fontSize: FontSize(14),
      fontFamily: fonts.Satoshi.Medium,
      color: Colors.blackColorNetural,
      marginVertical: hp(1),
    }
})
export default styles;