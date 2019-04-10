import React, { Component } from 'react';
import _ from 'lodash';
import { FlatList, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { addressFetch } from '../actions';
import ListItem from './ListItem';

class Home extends Component {
          constructor(props) {
            super(props);

            this.state = {
              
              data: []
              
            };

            this.arrayholder = [];
            }

  componentWillMount() {
      this.createDataSource(this.props);
  }
  componentWillUpdate = () => {
    LayoutAnimation.easeInEaseOut();
  }
  createDataSource() {
    this.props.addressFetch();
  }
  
  searchFilterFunction = text => {
    this.setState({ value: text });
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.FullName.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
    console.log('Data', this.state.data);
  };
 
  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type your name Here..."
        lightTheme
        round
        inputStyle={{ color: 'black' }}
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  renderRow(address) {
    return <ListItem address={address} />;
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
};

  render() {
    const add = [].concat(...this.props.address);
    const add1 = [].concat(...add);
    this.arrayholder = add1;
    //console.log('arrayholder', this.arrayholder);
    //console.log('flatlist data', this.state.data);
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={address => address.uid}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }

}


const mapStateToProps = state => {
  const address = _.map(state.address, (val, uid) => {
      return (_.map(val, (items) => { 
        return (_.map(items, (lst) => {
          return { ...lst, uid };
        }));
      })); 
});
  return { address };
};

export default connect(mapStateToProps, { addressFetch })(Home);
  