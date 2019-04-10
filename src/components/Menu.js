import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
  onLogoutButton() {  
    this.setState({
      data: []
    });
    Actions.auth();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Content>

        <List style={{ backgroundColor: 'rgba(187,187,187,0.8)' }}>
          <ListItem onPress={() => Actions.home()}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'times new roman' }}> Home </Text>
          </ListItem>
        </List>

          <List style={{ backgroundColor: 'rgba(187,187,187,0.8)' }}>
            <ListItem onPress={() => Actions.address()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'times new roman' }}>Update Info </Text>
            </ListItem>
          </List>

          <List style={{ backgroundColor: 'rgba(187,187,187,0.8)' }}>
            <ListItem onPress={this.onLogoutButton.bind(this)}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'times new roman' }}> Logout </Text>
            </ListItem>
          </List>

        </Content>
      </View>
    );
  }
}

export default Menu;
