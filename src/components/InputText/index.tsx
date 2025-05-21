import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';
import { Colors } from '../../utils/app_colors';




type MyComponentProps = {
  placeholder?: string;
  placeholderTextColor?: any;
  TextStyle?: any;
  value?: any;
  onChangeText?: any;
  secureTextEntry?: boolean;
  addLeft?: React.ReactNode;
  addRight?: React.ReactNode;
  onRightPress?: any;
  onLeftPress?: any;
  ref?: any;
  borderWidth?: any;
  readonly?: any;
  extraStyle?: any;
  rightIconStyle?: any;
  type?: any;
  multiline?: boolean;
  onTap?:any,
};

const InputText: React.FC<MyComponentProps> = props => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <TouchableOpacity onPress={props.onTap} style={[styles.container, props.extraStyle]}>
      {props.addLeft != null ? (
        <TouchableOpacity
          onPress={props.onLeftPress}
          style={[
            styles.imageLeftContainer,
            {width: props.addLeft ?0 : 0, alignSelf: 'center'},
          ]}>
          {props.addLeft}
        </TouchableOpacity>
      ) : null}
      <TextInput
        placeholderTextColor={props.placeholderTextColor ?? Colors.DarkGrey}
        ref={props.ref}
        aria-label=""
        style={[styles.text, props.TextStyle]}
        placeholder={props.placeholder}
        value={props.value}
        multiline={props.multiline}
        readOnly={props.readonly ?? false}
        onChangeText={props.onChangeText}
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.type}
      />
      {props.addRight != null ? (
        <TouchableOpacity
          onPress={props.onRightPress}
          style={[
            styles.imageContainer,
            props.rightIconStyle,
            {width: props.addRight ? 30 : 0},
          ]}>
          {props.addRight}
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
};
export default InputText;


