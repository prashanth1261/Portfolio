import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Content>

        <List style={{ backgroundColor: 'rgba(187,187,187,0.8)' }}>
          <ListItem style={{ borderColor: 'rgba(187,187,187,0.8)' }} onPress={() => Actions.home()}>
            <Text Style={{ backgroundColor: 'rgba(187,187,187,0.8)', color: 'white' }}> Home </Text>
          </ListItem>
        </List>

          <List style={{ backgroundColor: 'rgba(187,187,187,0.8)' }}>
            <ListItem style={{ borderColor: 'rgba(187,187,187,0.8)' }} onPress={() => Actions.address()}>
              <Text Style={{ backgroundColor: 'rgba(187,187,187,0.8)', color: 'white' }}> Address</Text>
            </ListItem>
          </List>

          <List style={{ backgroundColor: 'rgba(187,187,187,0.8)' }}>
            <ListItem style={{ borderColor: 'rgba(187,187,187,0.8)' }} onPress={() => Actions.titles()}>
              <Text Style={{ backgroundColor: 'rgba(187,187,187,0.8)', color: 'white' }}> Ttile </Text>
            </ListItem>
          </List>

          <List style={{ backgroundColor: 'rgba(187,187,187,0.8)' }}>
            <ListItem style={{ borderColor: 'rgba(187,187,187,0.8)' }} onPress={() => Actions.auth()}>
              <Text Style={{ backgroundColor: 'rgba(187,187,187,0.8)', color: 'white' }}> Logout </Text>
            </ListItem>
          </List>

        </Content>
      </View>
    );
  }
}

export default Menu;
