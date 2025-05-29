import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/app_colors";
import { FontSize, hp, wp } from "../../../utils/responsive";
import fonts from "../../../utils/fonts";


const styles = StyleSheet.create({
      body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal: wp(4),
  },
  editIcon:{position:'absolute', marginTop:hp(10), marginLeft:wp(20)},
  profilePhoto: {
    height: hp(20),
    width: 'auto',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.DarkGrey,
    marginTop: hp(5),
    paddingHorizontal: 12,
    paddingVertical: 12,
    // flexDirection: 'row',
    marginBottom: 20,
  },
  UserName: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    lineHeight: 17.07,
  },
  UserEmail: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.blackColorNetural,
    lineHeight: 17.07,
    textAlign: 'center',
  },
  headinText:{
      fontSize: FontSize(16),
      color: Colors.blackColorNetural,
      fontFamily: fonts.Satoshi.Bold,
      paddingBottom:hp(2)
    }
})
export default styles