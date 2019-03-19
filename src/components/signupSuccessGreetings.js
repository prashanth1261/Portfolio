import React, { Component } from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class signupSuccessGreetings extends Component {
  onButtonPress() {
    Actions.first();
  }

  render() {
    return (
      <ImageBackground
        source={require('./image_assets/sign_up-success/success.jpg')}
        style={styles.backgroundimage}
      >
      <View styles={styles.Viewtage}>
          <Card>
            <CardSection>
              <View>
              <Text>Your Account has been successfully created</Text>
              </View>
            </CardSection>
            <CardSection style={{ alignSelf: 'center' }}>
              <Button
                title="Continue"
                color='rgba(0,0,0,1)'
                onPress={this.onButtonPress.bind(this)}
              />
            </CardSection>
          </Card>
      </View>
      </ImageBackground>
    );
  }
}

const styles = {
  Viewtage: {
    top: '20%',
    alignItems: 'center',
  },
  backgroundimage: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
};

export default signupSuccessGreetings;
