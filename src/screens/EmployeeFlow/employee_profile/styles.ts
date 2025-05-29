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
   generView: {
    // height: hp(16),
    backgroundColor: Colors.lightGrey,
    // paddingVertical:hp(4),
    // paddingVertical:hp(10),
    borderRadius: hp(1),
    paddingVertical: hp(3),
    paddingHorizontal: hp(2),
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: FontSize(16),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginLeft: wp(2),
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGreyII,
    width: '100%',
    marginVertical: hp(2),
  },
    headinText:{
      fontSize: FontSize(16),
      color: Colors.lightGreyI,
      fontFamily: fonts.Satoshi.Medium,
      paddingBottom:hp(2)
    },
      card: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    padding: 16,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
   profilePhoto: {
    height: hp(10),
    width: 'auto',
    borderRadius: 10,
    // alignSelf: 'center',
    // alignItems: 'center',
    // backgroundColor: Colors.DarkGrey,
    // marginTop: hp(5),
    paddingHorizontal: 10,
    // paddingVertical: 12,
    // flexDirection: 'row',
    marginBottom: 20,
  },
  detail: {
      fontSize: FontSize(14),
      color: Colors.blackColorNetural,
      fontFamily: fonts.Satoshi.Medium,
      marginBottom: 4,
    },
    viewAllBox:{
      height:hp(4),
        paddingVertical:hp(1),
        paddingHorizontal:wp(2),
        borderRadius:6,
        backgroundColor:'rgba(76, 175, 80, 0.15)'
      },
      seeAllText:{
         fontSize:FontSize(12),
        fontWeight:'400',
        fontFamily: fonts.Satoshi.Regular,
        color: Colors.PrimaryColor
      },
      nameText:{
        fontSize:FontSize(14),
        fontFamily: fonts.Satoshi.Bold,
        fontWeight: '700',
        color: Colors.blackColorNetural,
      }
})
export default styles;