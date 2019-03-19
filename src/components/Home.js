import React, { Component } from 'react';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
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
    console.log('adrressss', this.props.address[0]);
    //let data2 = this.props.address[0];
    //const newaddress = _.map(data2);
    //let arr = ["Name", "Address"];
    return (
      <FlatList
        data={this.props.address}
        renderItem={this.renderRow}
        keyExtractor={address => address.uid}
      />
    );
  }

}

const mapStateToProps = state => {
  const address = _.map(state.address, (val, uid) => {
    return { ...val, uid };
  });

  return { address };
};

export default connect(mapStateToProps, { addressFetch })(Home);
