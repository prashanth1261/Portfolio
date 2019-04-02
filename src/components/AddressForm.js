import React, { Component } from 'react';
import { View, Alert, KeyboardAvoidingView, ImageBackground, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { addressCreate, addressUpdate, emptyForm } from '../actions';

class AddressForm extends Component {

  onCheckPress() {
    const { FullName, Street, Phone, Email, State, City, Zip } = this.props;
    // eslint-disable-next-line eqeqeq
    if (FullName == '' || Street == '' || Phone == '' || Email == '' || State == '' || City == '' || Zip == '') {
      Alert.alert('Please enter all the values');
      this.props.emptyForm({ FullName, Street, Phone, Email, State, City, Zip });
    } else {
      this.props.addressCreate({ FullName, Street, Phone, Email, State, City, Zip });
    }
  }
  
  render() {
    return (
      
      <ImageBackground
        source={require('./image_assets/Address/Address.jpg')}
        style={styles.backgroundimage}
      >
          <KeyboardAvoidingView style={styles.BackgroundStyle} enables>
          
            <View style={styles.overlayContainer}>
                <ScrollView>
                <View style={{ top: '5%', bottom: '5%' }}>
                    <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="Full Name"
                          style={{ color: '#fff', fontSize: 18 }}
                          value={this.props.FullName}
                          onChangeText={value => this.props.addressUpdate({ prop: 'FullName', value })}
                        />
                      </CardSection>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="Street"
                          style={{ color: '#fff', fontSize: 18 }}
                          value={this.props.Street}
                          onChangeText={value => this.props.addressUpdate({ prop: 'Street', value })}
                        />
                      </CardSection>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="Phone"
                          style={{ color: '#fff', fontSize: 18 }}
                          value={this.props.Phone}
                          onChangeText={value => this.props.addressUpdate({ prop: 'Phone', value })}
                        />
                      </CardSection>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="Email"
                          style={{ color: '#fff', fontSize: 18 }}
                          value={this.props.Email}
                          onChangeText={value => this.props.addressUpdate({ prop: 'Email', value })}
                        />
                      </CardSection>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="State"
                          style={{ color: '#fff', fontSize: 18 }}
                          value={this.props.State}
                          onChangeText={value => this.props.addressUpdate({ prop: 'State', value })}
                        />
                      </CardSection>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="City"
                          style={{ color: '#fff', fontSize: 18 }}
                          value={this.props.City}
                          onChangeText={value => this.props.addressUpdate({ prop: 'City', value })}
                        />
                      </CardSection>
                      <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                        <Input
                          label="Zip"
                          style={{ color: '#fff', fontSize: 18 }}
                          value={this.props.Zip}
                          onChangeText={value => this.props.addressUpdate({ prop: 'Zip', value })}
                        />
                      </CardSection>
                      </Card>
                </View>
                  <View style={{ paddingTop: '10%' }}>
                    <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                      <CardSection style={{ alignSelf: 'center' }}>
                          <Button
                            title="Save"
                            color='rgba(0,0,0,1)'
                            onPress={this.onCheckPress.bind(this)}
                          />
                        </CardSection>
                      </Card>
                  </View>
                </ScrollView>
            </View>
            
          </KeyboardAvoidingView>
          
      </ImageBackground>
      
    );
  }
}

const styles = {
  BackgroundStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundimage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47, 164, 218, 0.5)'
  }
};

const mapStateToProps = (state) => {
    const { FullName, Street, Phone, Email, State, City, Zip } = state.addressForm;

    return { FullName, Street, Phone, Email, State, City, Zip };
};

export default connect(mapStateToProps, { emptyForm, addressCreate, addressUpdate })(AddressForm);
