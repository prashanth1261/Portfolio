import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, signUp } from '../actions';

class SignUp extends Component {
  onEmailChange(text) {
      this.props.emailChanged(text);
  }
  onPasswordChange(text) {
      this.props.passwordChanged(text);
  }
  onButtonPress() {
      const { email, password } = this.props;
      this.props.signUp({ email, password });
  }
  renderError() {
    if (this.props.error) {
      return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <View>
        <Button
          title="Create Account"
          color='rgba(255,255,255, .1)'
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    );
  }
    render() {
        return (
          <ImageBackground
            source={require('./image_assets/sign_up_screen/Sign_up.jpg')}
            style={styles.backgroundimage}
          >
              <KeyboardAvoidingView style={styles.BackgroundStyle} enables>
                  <View style={styles.overlayContainer}>
                  <View style={{ top: '20%' }}>
                    <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="Email"
                          placeholder="abc@gmail.com"
                          onChangeText={this.onEmailChange.bind(this)}
                          value={this.props.email}
                          style={{ color: '#fff', fontSize: 18 }}
                        />
                      </CardSection>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          secureTextEntry
                          label="Password"
                          placeholder="Password"
                          onChangeText={this.onPasswordChange.bind(this)}
                          value={this.props.password}
                          style={{ color: '#fff', fontSize: 18 }}
                        />
                      </CardSection>
                      {this.renderError()}
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)', alignSelf: 'center' }}>
                        {this.renderButton()}
                      </CardSection>
                    </Card>
                  </View>
                  </View>
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
    backgroundColor: 'rgba(47, 164, 218, 0.5)',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  BackgroundStyle: {
    flex: 1,
    flexDirection: 'column'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, signUp })(SignUp);
