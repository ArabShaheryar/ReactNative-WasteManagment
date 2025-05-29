import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/app_colors';
import {FontSize, hp, wp} from '../../../utils/responsive';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.Whitecolor,
    paddingHorizontal: wp(4),
  },
  question: {
    fontSize: FontSize(16),
    fontFamily: fonts.Satoshi.Bold,
    color: Colors.blackColorNetural,
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
  emojiButton: {
    padding: 10,
  },
  emojiWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    
    alignItems: 'center',
  },
  selectedEmojiWrapper: {
     width: 48,
    height: 48,
    borderRadius:28,
    borderWidth:1,
    paddingBottom:2,
    borderColor: '#4CAF50',
    alignItems:'center',
    justifyContent:'center'
  },
  emoji: {
    fontSize: FontSize(30),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColor,
    // opacity: 0.5,
  },
  selectedEmoji: {
    // opacity: 1,
   
    transform: [{scale: 1.2}],
  },
  checkboxContainer: {
    marginVertical: hp(2.5),
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  checkboxText: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColorNetural,
  },
  ratingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2.5),
    paddingVertical: hp(0.5),
  },
    ratingLabel: {
    fontSize: FontSize(14),
    fontFamily: fonts.Satoshi.Medium,
    color: Colors.blackColorNetural,
  },
  ratingButtons: {
    flexDirection: 'row',
    gap: hp(3.4),
  },
});

export default styles;
