import Toast from "react-native-toast-message";


export const showSuccessToast = (title:any, body:any) => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: body,
    visibilityTime: 3000,
    
  });
};
export const showErrorToast = (title:any, body:any) => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: body,
    visibilityTime: 3000,
  });
};