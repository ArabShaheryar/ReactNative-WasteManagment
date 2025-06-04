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
  container: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.bottomBorder,
    paddingVertical: hp(1.5),
    marginTop:hp(1)
  },
  headerRow: {
    backgroundColor: Colors.lightGrey,
    borderRadius:10,
    marginTop: hp(2),
  },
  cell: {
    flex: 1,
    fontSize: FontSize(14),
    fontWeight: '500',
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColorNetural,
    textAlign: 'center',
  },
  headerText: {
    fontFamily: fonts.Satoshi.Medium,
    fontWeight: '500',
    color: Colors.DarkGrey,
    fontSize: 12,
  },
  statusTag: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  statusText: {
    fontSize: FontSize(10),
    fontWeight: '500',
    fontFamily: fonts.Satoshi.Medium
  },
  statusOnTime: {
    backgroundColor: 'rgba(76, 175, 80, 0.12)',
  },
  statusLate: {
    backgroundColor: 'rgba(253, 126, 20, 0.15)',
  },
  statusAbsent: {
    backgroundColor: 'rgba(220, 53, 69, 0.15)',
  },
    statusOnTimeText: {
    color: 'rgba(76, 175, 80, 1)',
  },
  statusLateText: {
    color: 'rgba(253, 126, 20, 1)',
  },
  statusAbsentText: {
    color: 'rgba(220, 53, 69, 1)',
  },
  statusDefault: {
    backgroundColor: '#eee',
  },
  dateText:{
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    fontWeight: '700',
    color: Colors.blackColorNetural,
    marginRight: wp(2)
  }
})
export default styles;