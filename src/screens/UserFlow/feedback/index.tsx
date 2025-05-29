import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ArrowBack, SelectedLike, UnSelectedDisLike} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import {height, hp} from '../../../utils/responsive';
import CustomButton from '../../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const FeedbackScreen = () => {
   const navigation = useNavigation<any>();
  const [experienceRating, setExperienceRating] = useState(null);
  const [pickupRating, setPickupRating] = useState(null); // null, 'like', or 'dislike'
  const [supportRating, setSupportRating] = useState(null);
  const [staffRating, setStaffRating] = useState(null);
  const emojiRatings = ['😡', '🙄', '😐', '🙂', '😌'];


  const handleRating = (category, value) => {
    if (category === 'pickup') {
      setPickupRating(pickupRating === value ? null : value);
    } else if (category === 'support') {
      setSupportRating(supportRating === value ? null : value);
    } else if (category === 'staff') {
      setStaffRating(staffRating === value ? null : value);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Feedback" leftIcon={<ArrowBack />} />
      <Text style={styles.question}>How would you rate your experience?</Text>
      <View style={styles.emojiContainer}>
        {emojiRatings.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setExperienceRating(index)}
            style={styles.emojiButton}>
            <View
              style={[
                styles.emojiWrapper,
                experienceRating === index && styles.selectedEmojiWrapper,
              ]}>
              <Text style={styles.emoji}>{emoji}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[styles.question, {marginTop: 0}]}>
        Would you tell us a little more about your experience.
      </Text>

      <View style={styles.checkboxContainer}>
        {/* Pickup Times Rating */}
        <View style={styles.ratingItem}>
          <Text style={styles.ratingLabel}>Pickup Times</Text>
          <View style={styles.ratingButtons}>
            <TouchableOpacity onPress={() => handleRating('pickup', 'dislike')}>
              {pickupRating === 'dislike' ? (
                <SelectedLike />
              ) : (
                <UnSelectedDisLike />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRating('pickup', 'like')}>
              {pickupRating === 'like' ? <SelectedLike /> : <UnSelectedDisLike />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Support System Rating */}
        <View style={styles.ratingItem}>
          <Text style={styles.ratingLabel}>Support System</Text>
          <View style={styles.ratingButtons}>
            <TouchableOpacity
              onPress={() => handleRating('support', 'dislike')}>
              {supportRating === 'dislike' ? (
                <SelectedLike />
              ) : (
                <UnSelectedDisLike />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRating('support', 'like')}>
              {supportRating === 'like' ? <SelectedLike /> : <UnSelectedDisLike />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Staff Performance Rating */}
        <View style={styles.ratingItem}>
          <Text style={styles.ratingLabel}>Staff Performance</Text>
          <View style={styles.ratingButtons}>
            <TouchableOpacity onPress={() => handleRating('staff', 'dislike')}>
              {staffRating === 'dislike' ? (
                <SelectedLike />
              ) : (
                <UnSelectedDisLike />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRating('staff', 'like')}>
              {staffRating === 'like' ? <SelectedLike /> : <UnSelectedDisLike />}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <InputText
        placeholder="Share your comment here (Optional)"
        extraStyle={{height: hp(12)}}
      />

      <CustomButton
        text="Submit"
        onPress={() => {
          navigation.goBack()
        }}
        extraStyle={{marginTop: hp(22),marginBottom:hp(5), width: '50%', alignSelf: 'flex-end'}}
      />
    </KeyboardAwareScrollView>
  );
};

export default FeedbackScreen;
