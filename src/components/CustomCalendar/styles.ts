import { StyleSheet } from "react-native";

import { Colors } from "../../utils/app_colors";
import fonts from "../../utils/fonts";
import { hp } from "../../utils/responsive";

const styles = StyleSheet.create({
    CalendarModalContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 16,
      borderRadius: 8,
    },
    CalendarmodalContent: {
      width: '100%',
      // backgroundColor: Colors.lightGrey,
      borderRadius: 8,
      
    },
    weekdayContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 10,
      marginTop: 20,
      marginBottom: 10,
    },
    weekdayText: {
      fontSize: 16,
      color: Colors.blackColorNetural,
      fontWeight: 'bold',
    },
    currentMonthStyle: {
      fontSize: 17,
      fontFamily: fonts.Satoshi.Bold,
      color: Colors.blackColorNetural,
      marginHorizontal: 20,
    },
  });

  export default styles;