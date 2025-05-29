import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/app_colors";
import { FontSize, hp, wp } from "../../../utils/responsive";
import fonts from "../../../utils/fonts";


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Colors.PrimaryColor
    },
    bottomContent: {
        flex: 1,
        backgroundColor: Colors.Whitecolor,
        marginTop: hp(7),
        borderTopLeftRadius: wp(6),
        borderTopRightRadius: wp(6)
    },
    logoStyle: {
        marginTop: hp(5),
        alignItems: 'center'
    },
    SignInText: {
        fontSize: FontSize(22),
        color: Colors.blackColorNetural,
        fontFamily: fonts.Satoshi.Bold,
        fontWeight: '700',
        marginTop: hp(2)
    },
    dontHaveAccountText: {
        fontSize: FontSize(14),
        color: Colors.blackColorNetural,
        fontFamily: fonts.Satoshi.Regular,
        fontWeight: '400',
        marginTop: hp(1)
    },
    dontHaveAccountTextSpan: {
        fontSize: FontSize(14),
        color: Colors.PrimaryColor,
        fontFamily: fonts.Satoshi.Medium,
        fontWeight: '400',
        marginTop: hp(1)
    },
    forgetText: {
        fontSize: FontSize(12),
        color: Colors.blackColorNetural,
        fontFamily: fonts.Satoshi.Medium,
        fontWeight: '400',
        marginTop: hp(2),
        alignSelf: 'flex-end'
    },
})
export default styles;