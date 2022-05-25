import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-ionicons';

interface Props {
    text: string;
}

const Header: FC<Props> = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{text}</Text>
            <Icon name="md-list-box" size={40} color="white" style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 20,
        alignItems: 'center',
    },

    headerText: {
        color: 'white',
        fontSize: 20,
    },

    logo: {
        marginTop: 10,
    }
});

export default Header;