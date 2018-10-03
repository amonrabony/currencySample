/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {
    text: String
};
export default class Cell extends Component<Props> {
    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        height: 50,
        alignItems: 'center',
    },
    text: {
        textAlign: 'center'
    }
});
