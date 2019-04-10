import React, { Component } from 'react';
import { View, Alert, KeyboardAvoidingView, ImageBackground, Button, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { addressCreate, addressUpdate, emptyForm } from '../actions';

class AddressForm extends Component {

  onCheckPress() {
    const { FullName, Street, Phone, Email, State, City, Zip, University, Title, Degree, Major, GPA, LinkedIn, GitHub } = this.props;
    // eslint-disable-next-line eqeqeq
    if (FullName == '' || Street == '' || Phone == '' || Email == '' || State == '' || City == '' || Zip == '' || University == '' || Title == '' || Degree == '' || Major == '' || GPA == '' || LinkedIn == '' || GitHub == '') {
      Alert.alert('Please enter all the values');
    } else {
      this.props.addressCreate({ FullName, Street, Phone, Email, State, City, Zip, University, Title, Degree, Major, GPA, LinkedIn, GitHub });
      this.props.emptyForm({ FullName, Street, Phone, Email, State, City, Zip, University, Title, Degree, Major, GPA, LinkedIn, GitHub });
      Alert.alert('Address save successfull');
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
                    <View>
                    <Text style={{ fontSize: 20, color: 'red' }}>
                            ^Please enter all fields or enter '-'
                    </Text>
                      <Text style={{ fontSize: 20, paddingLeft: 15, color: '#fff', fontWeight: 'bold', fontFamily: 'times new roman', alignSelf: 'center' }} >
                      Contact details 
                      </Text>
                        <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                          <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                            <Input
                              label="Full Name"
                              style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                              value={this.props.FullName}
                              onChangeText={value => this.props.addressUpdate({ prop: 'FullName', value })}
                            />
                          </CardSection>
                          <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                            <Input
                              label="Street"
                              style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                              value={this.props.Street}
                              onChangeText={value => this.props.addressUpdate({ prop: 'Street', value })}
                            />
                          </CardSection>
                          <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                            <Input
                              label="Phone"
                              style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                              value={this.props.Phone}
                              onChangeText={value => this.props.addressUpdate({ prop: 'Phone', value })}
                            />
                          </CardSection>
                          <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                            <Input
                              label="Email"
                              style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                              value={this.props.Email}
                              onChangeText={value => this.props.addressUpdate({ prop: 'Email', value })}
                            />
                          </CardSection>
                          <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                            <Input
                              label="State"
                              style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                              value={this.props.State}
                              onChangeText={value => this.props.addressUpdate({ prop: 'State', value })}
                            />
                          </CardSection>
                          <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                            <Input
                              label="City"
                              style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                              value={this.props.City}
                              onChangeText={value => this.props.addressUpdate({ prop: 'City', value })}
                            />
                          </CardSection>
                          <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                            <Input
                              label="Zip"
                              style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                              value={this.props.Zip}
                              onChangeText={value => this.props.addressUpdate({ prop: 'Zip', value })}
                            />
                          </CardSection>
                          </Card>
                          
                          <Text style={{ fontSize: 20, paddingLeft: 15, color: '#fff', fontWeight: 'bold', fontFamily: 'times new roman', alignSelf: 'center' }} >
                           Recent Education 
                          </Text>
                          <View>
                            <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                              <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input 
                                label="University"
                                style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                                value={this.props.University}
                                onChangeText={value => this.props.addressUpdate({ prop: 'University', value })}
                                />
                              </CardSection>
                              <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input 
                                label="Degree"
                                style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                                value={this.props.Degree}
                                onChangeText={value => this.props.addressUpdate({ prop: 'Degree', value })}
                                />
                              </CardSection>
                              <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input 
                                label="Major"
                                style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                                value={this.props.Major}
                                onChangeText={value => this.props.addressUpdate({ prop: 'Major', value })}
                                />
                              </CardSection>
                              <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input 
                                label="GPA"
                                style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                                value={this.props.GPA}
                                onChangeText={value => this.props.addressUpdate({ prop: 'GPA', value })}
                                />
                              </CardSection>
                            </Card>
                          </View>

                          <Text style={{ fontSize: 20, paddingLeft: 15, color: '#fff', fontWeight: 'bold', fontFamily: 'times new roman', alignSelf: 'center' }} >
                           Title
                          </Text>
                          <View>
                            <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                              <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input 
                                label="Title"
                                placeholder='Web developer at XYZ'
                                style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                                value={this.props.Title}
                                onChangeText={value => this.props.addressUpdate({ prop: 'Title', value })}
                                />
                              </CardSection>
                            </Card>
                          </View>
                          
                          <Text style={{ fontSize: 20, paddingLeft: 15, color: '#fff', fontWeight: 'bold', fontFamily: 'times new roman', alignSelf: 'center' }} >
                           Links
                          </Text>
                          <View>
                            <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                              <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input 
                                label="LinkedIn"
                                style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                                value={this.props.LinkedIn}
                                onChangeText={value => this.props.addressUpdate({ prop: 'LinkedIn', value })}
                                />
                              </CardSection>
                              <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input 
                                label="GitHub"
                                style={{ color: '#fff', fontSize: 18, fontFamily: 'times new roman' }}
                                value={this.props.GitHub}
                                onChangeText={value => this.props.addressUpdate({ prop: 'GitHub', value })}
                                />
                              </CardSection>
                            </Card>
                          </View>

                    </View> 

                    <View style={{ paddingTop: '5%' }}>
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
    const { FullName, Street, Phone, Email, State, City, Zip, University, Title, Degree, Major, GPA, LinkedIn, GitHub } = state.addressForm;

    return { FullName, Street, Phone, Email, State, City, Zip, Title, University, Degree, Major, GPA, LinkedIn, GitHub };
};

export default connect(mapStateToProps, { emptyForm, addressCreate, addressUpdate })(AddressForm);
