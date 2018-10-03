/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, FlatList, StyleSheet, Text, View} from 'react-native';
import Row from './Row';


type Props = {
    data: Array
};
export default class Table extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    ListHeaderComponent={<Row name="Name" amount="Amount" volume="Volume"/>}
                    renderItem={({item}) => <Row name={item.name} amount={item.amount} volume={item.volume} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
