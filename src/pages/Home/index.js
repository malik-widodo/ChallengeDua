import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {BackgroundHeader, Profile} from '../../assets/images/';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={BackgroundHeader} style={styles.header}>
        <Image source={Profile} style={styles.profile} />
        <View style={styles.hello}>
          <Text style={styles.name}> Hi, Moch Malik A. Widodo </Text>
          <Text style={styles.location}>SURABAYA</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const windowWidht = Dimensions.get('window').witdht;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidht,
    height: windowHeight * 0.27,
  },
  profile: {
    width: 40,
    height: 40,
  },
  hello: {
    marginTop: windowHeight * 0.07,
  },
  name: {
    fontSize: 12,
  },
  location: {
    fontSize: 14,
  },
});
