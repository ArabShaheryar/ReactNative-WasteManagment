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
   pictureBox:{
      height: hp(16),
      backgroundColor: Colors.lightGrey,
      borderRadius:hp(2),
      alignItems:'center',
      justifyContent:'center',
      marginTop:hp(3)
  },
  textUpload:{
    fontSize: FontSize(12),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium
  }
})
export default styles;