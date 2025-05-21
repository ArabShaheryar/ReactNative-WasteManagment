export const Colors = {
    PrimaryColor: 'rgba(76, 175, 80, 1)',
    blackColorNetural:'rgba(51, 51, 51, 1)',
      DarkGrey:'rgba(102, 102, 102, 1)',



    BlackColor:'rgba(0, 0, 0, 0)',
    PrimaryColorI: 'rgba(147, 200, 58, 0.1)',
    Whitecolor:'rgba(255, 255, 255, 1)',
    WhiteColorI:'rgba(237, 245, 251, 1)',
    WhiteLight:'rgba(221, 218, 218, 1)',
    TextColor:'rgba(33, 33, 33, 1)',
    lightGrey:'rgba(208, 208, 208, 1)',
    lightGreyI:'rgba(125, 125, 125, 1)',
    lightGreyII:'rgba(189, 189, 189, 1)',
  
    backgroundColor:'rgba(245, 245, 245, 1)',
    InputField:'rgba(234, 234, 234, 1)',
    logoutButton:'rgba(175, 0, 0, 0.2)',
    redColorI:'rgba(175, 0, 0, 1)',
    redColor:'rgba(222, 22, 22, 1)',
    greenColor:'rgba(0, 161, 99, 1)',
    blueColor:'rgba(0, 163, 254, 1)'
  };
  export const rgba = (hex: any, opacity: any) => {
    const hexValue = hex.replace('#', '');
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  