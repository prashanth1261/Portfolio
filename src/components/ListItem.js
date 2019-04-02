import React, { Component } from 'react';
import { Text, View, YellowBox, TouchableWithoutFeedback, UIManager, Platform, LayoutAnimation } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';
import HomeTitle from './HomeTitle';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
 }

class ListItem extends Component {
      
        componentWillUpdate() {
          LayoutAnimation.spring();
        }

        renderDescription() {
          const { Street, Phone, State, City, Zip } = this.props.address.item;
          const { expanded } = this.props;

          if (expanded) {
            return (
              <View>
              <View style={{ marginLeft: 15, padding: 0 }}>
              <Card>
              <Text style={{ fontSize: 18, fontStyle: 'italic', fontWeight: 'bold', marginLeft: 30 }}>Contact:</Text>
                <CardSection>
                  <Text style={styles.titleStyle}>
                    {Phone}
                  </Text>
                </CardSection>
                <CardSection>
                  <Text style={styles.titleStyle}>
                    {Street}
                  </Text>
                </CardSection>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, backgroundColor: '#fff' }}>
                <CardSection>
                  <Text style={styles.titleStyle}>
                    {State}
                  </Text>
                </CardSection>
                <CardSection>
                  <Text style={styles.titleStyle}>
                    {City}
                  </Text>
                </CardSection>
                <CardSection>
                  <Text style={styles.titleStyle}>
                    {Zip}
                  </Text>
                </CardSection>
                </View>
              </Card>
              </View>
              </View>
            );
          }
      }
  
  render() {
    const { FullName, uid, Email } = this.props.address.item;

    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectedUser(uid)}
      >
        <View style={{ paddingLeft: 10, paddingTop: 10, paddingRight: 10 }}>
          <Card>
              <CardSection style={{ backgroundColor: 'rgb(216, 208, 216)', padding: 3 }}>
                <Text style={{ fontSize: 24, paddingLeft: 15, fontWeight: 'bold', fontFamily: 'times new roman' }}>
                  {FullName}
                </Text>
              </CardSection>
            <CardSection style={{ backgroundColor: 'rgb(216, 208, 216)', padding: 0.5 }}>
              <Text style={{ fontSize: 16, paddingLeft: 15, paddingTop: 0, marginLeft: 10, fontStyle: 'italic', backgroundColor: 'rgb(216, 208, 216)' }}>
                  {Email}
              </Text>
            </CardSection>
          </Card>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 16,
    paddingLeft: 15
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedUserId === ownProps.address.item.uid;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
