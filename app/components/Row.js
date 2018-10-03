/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import Cell from './Cell'


type Props = {
    name: String,
    amount: String | Number,
    volume: String | Number
};

const { width } = Dimensions.get('window');
const CELL_WIDTH = width / 3;

export default class Row extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Cell width={CELL_WIDTH} text={this.props.name}/>
                <Cell width={CELL_WIDTH} text={this.props.volume}/>
                <Cell width={CELL_WIDTH} text={this.props.amount}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
});
