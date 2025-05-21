import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';
import { ArrowBack } from '../../Assets';


type MyComponentProps = {
  text?: string;
  isText?: boolean;
  centerIcon?: any;
  leftIcon?: any;
  rightIcon?: any;
  OnLeftPress?: () => void;
  OnRightpress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  rightIconStyle?: any;
  leftIconStyle?: any;
};

const AppBar: React.FC<MyComponentProps> = props => {
  const navigation = useNavigation<any>();
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={
          props.OnLeftPress ? props.OnLeftPress : () => navigation.goBack()
        }>
        {
          <View style={[props.leftIconStyle, styles.leftIconStyle]}>
            <ArrowBack />
          </View>
        }
      </TouchableOpacity>
      {!props.isText ? (
        <Text style={[styles.textStyle, props.textStyle]}>{props.text}</Text>
      ) : (
        <View>{props.centerIcon}</View>
      )}
      {props.rightIcon ? (
        <TouchableOpacity onPress={props.OnRightpress}>
          {
            <View style={[styles.rightIconStyle, props.rightIconStyle]}>
              {props.rightIcon}
            </View>
          }
        </TouchableOpacity>
      ) : (
        <View style={{width: '5%'}}></View>
      )}
    </View>
  );
};

export default AppBar;