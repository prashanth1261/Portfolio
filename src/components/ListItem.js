import React, { Component } from 'react';
import { Text, View, YellowBox } from 'react-native';
import _ from 'lodash';
import { Card, CardSection } from './common';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class ListItem extends Component {
  render() {
    const { FullName, Street, Phone, Email, State, City, Zip } = this.props.address.item;

    return (
      <View>
      <Card>
        <CardSection>
          <Text style={styles.titleStyle}>
            {FullName}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={styles.titleStyle}>
            {Street}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={styles.titleStyle}>
            {Phone}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={styles.titleStyle}>
            {Email}
          </Text>
        </CardSection>
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
      </Card>
      </View>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
