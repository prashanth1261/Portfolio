import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
     this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
    console.log(this.props);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  onSignInButtonPress() {
    Actions.signup();
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
      <View style={{ marginLeft: 90 }}>
        <Button
          title="Login"
          color='rgba(255,255,255, .1)'
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.cardstyle}>
              <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                  <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)', }}>
                    <Input
                     style={{ color: '#fff', fontSize: 18 }}
                     label="Email"
                     placeholder='abc@gmail.com'
                     onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                  </CardSection>
                  <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)', }}>
                    <Input
                    style={{ color: '#fff', fontSize: 18 }}
                    secureTextEntry
                    label="Password"
                    placeholder='*******'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                  </CardSection>

                  {this.renderError()}

                  <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)', }}>
                    {this.renderButton()}

                    <View style={{ marginLeft: 90 }}>
                      <Button
                        title="Recruiter?"
                        style={styles.buttonStyle}
                        color='rgba(255,255,255, .1)'
                      />
                    </View>
                  </CardSection>
              </Card>

                    <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                            <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)', }}>
                            <View style={{ marginLeft: 60 }}>
                            <Button
                              title="New User"
                              style={styles.buttonStyle}
                              color='rgba(255,255,255, .1)'
                              onPress={this.onSignInButtonPress.bind(this)}
                            />
                            </View>
                            <View style={{ marginLeft: 50 }}>
                            <Button
                              title="Forgot Password?"
                              style={styles.buttonStyle}
                              color='rgba(255,255,255, .1)'
                            />
                            </View>
                            </CardSection>
                    </Card>
        </View>


    );
  }
}

const styles = {
  cardstyle: {
    height: '60%',
    flexDirection: 'column',
    flexWrap: 'wrap'
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
