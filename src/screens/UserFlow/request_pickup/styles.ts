import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/app_colors";
import { FontSize, hp, wp } from "../../../utils/responsive";
import fonts from "../../../utils/fonts";



const styles = StyleSheet.create({
 body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal:wp(4)
  },
dateTimeText:{
fontSize:FontSize(16),
fontFamily: fonts.Satoshi.Bold,
color: Colors.blackColorNetural,
marginTop:hp(3),

},

})
export default styles;