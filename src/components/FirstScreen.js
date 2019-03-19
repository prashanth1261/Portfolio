import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';

class FirstScreen extends Component {
  render() {
    return (

       <ImageBackground
          source={require('./image_assets/wallpaper.jpg')}
          style={styles.backgroundimage}
       >
           <KeyboardAvoidingView style={styles.BackgroundStyle} enabled>
              <View style={styles.overlayContainer}>
                <View style={styles.top}>
                  <Text style={styles.header}> P O R T F O L I O </Text>
                </View>
              </View>
              <LoginForm />
            </KeyboardAvoidingView>
       </ImageBackground>

    );
  }
}

const styles = {
  backgroundimage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47, 164, 218, 0.08)'
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)'
  },
  BackgroundStyle: {
    flex: 1,
    flexDirection: 'column'
  }
};

export default FirstScreen;
