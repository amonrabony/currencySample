/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


type Props = {
    update: Function
};
export default class Header extends Component<Props> {
    render() {
        return (
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={() => this.props.update()}>
                        <Image style={styles.icon} source={require('../assets/refresh.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        width: 26,
        height: 26,
        resizeMode: 'cover'
    },
    outerContainer: {
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        width: '100%',
        height: Platform.OS === 'ios' ? 70 : 62,
        ...Platform.select({
            ios: {
                paddingTop: 8,
            },
        }),
    }
});
