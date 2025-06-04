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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(1),
    backgroundColor: 'white',
    marginTop: hp(1.5),
  },
  tab: {
    paddingHorizontal: wp(2.2),
    paddingVertical: hp(0.5),
    backgroundColor: Colors.lightGrey,
    borderRadius: hp(0.5),
  },
  selectedTab: {
    backgroundColor: Colors.PrimaryColor,
    borderRadius: hp(0.5),
  },
  tabText: {
    fontSize: FontSize(12),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.lightGreyI,
  },
  selectedTabText: {
    fontSize: FontSize(12),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.Whitecolor,
  },
  listContent: {
    padding: 16,
  },
  title: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detail: {
    fontSize: FontSize(14),
    color: Colors.blackColorNetural,
    fontFamily: fonts.Satoshi.Medium,
    marginBottom: 4,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    // marginTop: 8,
  },
  statusText: {
    color: 'white',
    fontSize: FontSize(10),
   fontFamily:fonts.Satoshi.Medium
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
   
  },
});
export default styles;
