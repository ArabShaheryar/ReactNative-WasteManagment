import { StyleSheet } from "react-native";
import { FontSize, hp, wp } from "../../utils/responsive";
import { Colors } from "../../utils/app_colors";
import fonts from "../../utils/fonts";


const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: hp(7),
    backgroundColor: Colors.PrimaryColor,
    borderRadius: wp(2.5),
    paddingVertical:hp(1),
    paddingHorizontal:wp(2)
  },
  textStyle:{
    fontSize:FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    
  },
  dateTimeStyle:{

  }
})

export default styles;