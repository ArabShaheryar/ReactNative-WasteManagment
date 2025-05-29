import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/app_colors';
import {FontSize, hp, wp} from '../../../utils/responsive';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal:wp(4)
  },
  appBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:hp(2.5)
  },
  userImage: {
    height: hp(4),
    width: hp(4),
    borderRadius: hp(2),
  },
  latestNotificationBox: {
    width: '100%',
    height: hp(3),
    flexDirection: 'row',
    backgroundColor: Colors.lightGrey,
    alignItems:'center',
    marginVertical:hp(2.5),
    paddingHorizontal:hp(1)
  },
  
  quickActionBox: {
    width:wp(26),
    height:hp(12),
    backgroundColor: Colors.lightGrey,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  actionsImages:{
    width:41,
    height:40,
    marginHorizontal:hp(20)
  },
  recentNotificationText:{
    fontSize:FontSize(12),
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.DarkGrey,
    marginLeft:wp(1)
  },
   MainBoxContainer: {
    width: '100%',
    // height: hp(7),
    backgroundColor: Colors.PrimaryColor,
    borderRadius: wp(2.5),
    paddingVertical:hp(2),
    paddingHorizontal:wp(2)
  },
  mainBoxTitle:{
    fontSize:FontSize(18),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.Whitecolor,
    
  },
  dateTimeStyle:{
    fontSize:FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.Whitecolor,
    marginTop:hp(1.5)
  },
  quickActionText:{
    fontSize:FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    marginVertical:hp(2)
  },
   quickActionsText:{
    fontSize:FontSize(14),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    marginTop:hp(0.5),
    textAlign:'center'
  },
   pickupBox: {
    width: '100%',
    // height: hp(8),
    backgroundColor: Colors.lightGrey,
    borderRadius: wp(2.5),
    paddingVertical:hp(1),
    paddingHorizontal:wp(2),
    marginVertical:hp(0.5)
  },
  quickActionsContainer: {
    flexDirection:'row',
    // flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingHorizontal: 16,
    marginTop: 0,
  },
  pickUpDateAndTime:{
    fontSize:FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    
  },
  pickTimeText:{
    fontSize:FontSize(14),
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.blackColorNetural,
  },
  addressText:{
    fontSize:FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColorNetural,
  },
  recentPickupText:{
     fontSize:FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
  },
  scheduledBox:{
    paddingVertical:hp(1),
    paddingHorizontal:wp(2),
    borderRadius:6,
    backgroundColor:'rgba(255, 255, 255, 0.1)'
  },
  scheduleText:{
    fontSize:FontSize(12),
    fontWeight:'500',
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.lightGrey
  },
    viewAllBox:{
    paddingVertical:hp(1),
    paddingHorizontal:wp(2),
    borderRadius:6,
    backgroundColor:Colors.lightGrey
  },
  seeAllText:{
     fontSize:FontSize(12),
    fontWeight:'400',
    fontFamily: fonts.Satoshi.Regular,
    color: Colors.DarkGrey
  }
});
export default styles;
