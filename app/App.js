/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Table from './components/Table';
import Header from './components/Header';
import {fetchCurrency} from "./services/currency";


type Props = {};

type State = {
  data: Array,
};

const handleStock = (stock) => {
  return stock.map(currency => ({name: currency.name, amount: (+currency.price.amount).toFixed(2), volume: currency.volume}))
};

export default class App extends Component<Props> {

  state = {
    data: []
  };

  constructor(props) {
    super(props);
    this.updateList();
    setTimeout(() => {
      this.updateList();
    }, 15000)
  }

  updateList = () => {
    fetchCurrency().then(currency => {
      if (currency['stock']) {
        this.setState({data: handleStock(currency['stock'])});
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Header update={() => this.updateList()}/>
        <Table data={this.state.data}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
