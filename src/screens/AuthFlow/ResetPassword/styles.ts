import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/app_colors";
import { FontSize, hp } from "../../../utils/responsive";
import fonts from "../../../utils/fonts";


const styles = StyleSheet.create({
     body: {
        flex: 1,
        backgroundColor: Colors.Whitecolor
    },
    profileText: {
        fontSize: FontSize(22),
        color: Colors.blackColorNetural,
        fontFamily: fonts.Satoshi.Bold,
        fontWeight: '700',
        marginTop: hp(2)
    },
    profileInfo: {
        fontSize: FontSize(14),
        color: Colors.blackColorNetural,
        fontFamily: fonts.Satoshi.Regular,
        fontWeight: '400',
        marginTop: hp(1)
    },
})
export default styles;