import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type MyComponentProps = {
  onPress?: any;
  extraStyle?: any;
  TextStyle?: any;
  rightIconStyle?: any;
  rightIcon?: React.ReactNode;
  leftIconStyle?: any;
  leftIcon?: React.ReactNode;
  text?: string;
  disabled?: boolean;
};

const CustomButton: React.FC<MyComponentProps> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props?.disabled}
      style={[
        styles.buttonStyle,
        props.extraStyle,
        {
          opacity: props?.disabled ? 0.6 : 1,
        },
      ]}>
      {props.leftIcon != null ? (
        <View
          style={[
            styles.imageContainer,
            props.leftIconStyle,
            {width: props.leftIcon ? 20 : 0},
          ]}>
          {props.leftIcon}
        </View>
      ) : (
        <View></View>
      )}

      <Text style={[styles.textStyle, props.TextStyle]}>{props.text}</Text>
      {props.rightIcon != null ? (
        <View
          style={[
            styles.imageContainer,
            props.rightIconStyle,
            {width: props.rightIcon ? 20 : 0},
          ]}>
          {props.rightIcon}
        </View>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;