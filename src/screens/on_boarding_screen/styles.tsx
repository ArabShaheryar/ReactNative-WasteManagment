import { StyleSheet } from "react-native";
import { Colors } from "../../utils/app_colors";
import { FontSize, hp, wp } from "../../utils/responsive";
import fonts from "../../utils/fonts";


const styles = StyleSheet.create({
    obText: {
        fontSize: FontSize(24),
        fontFamily: fonts.Satoshi.Bold,
        color: Colors.blackColorNetural,
        fontWeight: '700',
        marginTop: hp(1)
    },
    obTextContent: {
        fontSize: FontSize(16),
        fontFamily: fonts.Satoshi.Medium,
        color: Colors.DarkGrey,
        marginTop: hp(1),
        // marginBottom: hp(4)
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: wp(5),
        // alignItems: 'center',
        paddingBottom: hp(5),
    },
    newUser: {
        fontSize: FontSize(16),
        fontFamily: fonts.Satoshi.Regular,
        color: Colors.blackColorNetural,
        textAlign:'center'
        ,marginTop:hp(6)
    },
    newUserSpan: {
        fontSize: FontSize(16),
        fontFamily: fonts.Satoshi.Bold,
        color: Colors.DarkGrey,
          textAlign:'center'
    }
})

export default styles