import React, { Component } from 'react';
import { Text, View, Alert, Clipboard, TouchableWithoutFeedback, YellowBox, LayoutAnimation } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class ListItem extends Component {
      
        componentWillUpdate() {
          LayoutAnimation.spring();
        }

        setLinkedInClipboardContent=(msg) => {
          Clipboard.setString(msg);
          Alert.alert('LinkedIn URL Copied');
        }

        setGitHubClipboardContent=(msg) => {
          Clipboard.setString(msg);
          Alert.alert('GitHub URL Copied');
        }

        renderDescription() {
          const { Street, Phone, State, City, Zip, University, Degree, Major, GPA, LinkedIn, GitHub } = this.props.address.item;
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
                        {State},
                      </Text>
                    </CardSection>
                    <CardSection>
                      <Text style={styles.titleStyle}>
                        {City},
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

                <View style={{ marginLeft: 15, padding: 0 }}>
                  <Card>
                  <Text style={{ fontSize: 18, fontStyle: 'italic', fontWeight: 'bold', marginLeft: 30 }}>Education:</Text>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, backgroundColor: '#fff' }}>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                          {University},
                        </Text>
                      </CardSection>
                      <CardSection>
                        <Text style={styles.titleStyle}>
                          {Degree} Degree
                        </Text>
                      </CardSection>
                    </View>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, backgroundColor: '#fff' }}>
                    <CardSection>
                      <Text style={styles.titleStyle}>
                        {Major},
                      </Text>
                    </CardSection>
                    <CardSection>
                      <Text style={styles.titleStyle}>
                        GPA {GPA} 
                      </Text>
                    </CardSection>
                  </View>
                  </Card>
                </View>

                <View style={{ marginLeft: 15, padding: 0 }}>
                  <Card>
                  <Text style={{ fontSize: 18, fontStyle: 'italic', fontWeight: 'bold', marginLeft: 30 }}>Links:</Text>
                    <CardSection>
                      <Text style={styles.titleStyle}>
                        LinkedIn:
                      </Text>
                      <Text style={styles.URLtitleStyle} selectable onPress={() => this.setLinkedInClipboardContent(LinkedIn)} >
                        {LinkedIn},
                      </Text>

                    </CardSection>
                    <CardSection>
                    <Text style={styles.titleStyle}>
                        GitHub:
                      </Text>
                      <Text style={styles.URLtitleStyle} selectable onPress={() => this.setGitHubClipboardContent(GitHub)}>
                       {GitHub} 
                      </Text>
                    </CardSection>
                  </Card>
                </View>

              </View>
            );
          }
      }
  
  render() {
    const { FullName, uid, Email, Title } = this.props.address.item;

    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectedUser(uid)}
      >
        <View style={{ paddingLeft: 10, paddingTop: 10, paddingRight: 10 }}>
          <Card>
              <CardSection style={{ backgroundColor: 'rgb(216, 208, 216)', padding: 3 }}>
                <Text style={{ fontSize: 24, paddingLeft: 15, fontWeight: 'bold', fontFamily: 'times new roman', color: '#0f057f' }}>
                  {FullName}
                </Text>
              </CardSection>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, backgroundColor: 'rgb(216, 208, 216)' }}>
                <CardSection style={{ backgroundColor: 'rgb(216, 208, 216)', padding: 0.5 }}>
                    <Text style={{ fontSize: 16, paddingLeft: 15, paddingTop: 0, marginLeft: 10, fontStyle: 'italic', backgroundColor: 'rgb(216, 208, 216)', color: '#036b31' }}>
                        {Title},
                    </Text>
                  </CardSection>
                <CardSection style={{ backgroundColor: 'rgb(216, 208, 216)', padding: 0.5 }}>
                  <Text style={{ fontSize: 16, paddingLeft: 15, paddingTop: 0, marginLeft: 10, fontStyle: 'italic', backgroundColor: 'rgb(216, 208, 216)', color: '#820220' }}>
                        {Email}
                  </Text>
                </CardSection>
            </View>
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
  URLtitleStyle: {
    fontSize: 16,
    paddingLeft: 15,
    textDecorationLine: 'underline'
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedUserId === ownProps.address.item.uid;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
