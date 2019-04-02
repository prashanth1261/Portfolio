import React, { Component } from 'react';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { titleFetch } from '../actions';
import TitleItem from './TitleItem';

class HomeTitle extends Component {
  componentWillMount() {
      this.createDataSource(this.props);
  }
  createDataSource() {
    this.props.titleFetch();
  }
  renderRow(title) {
    return <TitleItem title={title} />;
  }

  render() {
    const addi = [].concat(...this.props.title);
    const addi1 = [].concat(...addi);
    console.log('title1', addi1);
    return (
      <FlatList
        data={addi1}
        renderItem={this.renderRow}
        keyExtractor={title => title.uid}
      />
    );
  }

}


const mapStateToProps = state => {
  const title = _.map(state.title, (val, uid) => {
      return (_.map(val, (items) => {
        return { ...items, uid };
      })); 
});
  return { title };
};

export default connect(mapStateToProps, { titleFetch })(HomeTitle);
  