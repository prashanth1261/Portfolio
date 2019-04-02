import React, { Component } from 'react';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
//import { ListItem } from 'react-native-elements';
import { addressFetch } from '../actions';
import ListItem from './ListItem';

class Home extends Component {
  componentWillMount() {
      this.createDataSource(this.props);
  }
  createDataSource() {
    this.props.addressFetch();
  }
  renderRow(address) {
    return <ListItem address={address} />;
  }

  render() {
    console.log('adrressss', this.props.address);
    console.log('adrressss 1', this.props.address[[0][[0][0]]]);
    const add = [].concat(...this.props.address);
    const add1 = [].concat(...add);
    console.log('add1', add1);
    //console.log('flattened array', this.props.address.flat(2));
    //let x = this.props.address[[0][[0][0]]];
    //console.log('x', x[0]);;
    //let data2 = this.props.address[0];
    //const newaddress = _.map(data2);
    //let arr = ["Name", "Address"];
    //const jsonQuery = require('json-query');

    //let FullName = jsonQuery('[*][FullName]', { data: x }).value;
    
    //console.log('FullName', FullName);
    return (
      <FlatList
        data={add1}
        renderItem={this.renderRow}
        keyExtractor={address => address.uid}
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
  