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
    divider: {
    height: 1,
    backgroundColor: Colors.lightGreyII,
    width: '100%',
    marginVertical: hp(2),
  },
  detail: {
    fontSize: FontSize(14),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginBottom: 4,
  },
})
export default styles;