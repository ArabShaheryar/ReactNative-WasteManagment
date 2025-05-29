import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type MyComponentProps = {
    firstText?:any;
    dateTime?:any;
  firstTextExtraStyle?:any;
  status?:any;
  timeDateStyle?:any;
  containerExtraStyle?: any;
  rightIconStyle?: any;
  type?: any;
  multiline?: boolean;
  onTap?: any;
};

const PickUpBox: React.FC<MyComponentProps> = props => {
  return (
    <View></View>
  );
};
export default PickUpBox;
