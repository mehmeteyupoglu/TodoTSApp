import React, { FC } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = ({ icon, placeholder, onChangeText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Icon name={icon} size={22} color="#555" style={styles.icon}/>
                <TextInput placeholderTextColor='#555' placeholder={placeholder} onChangeText={onChangeText} />
                <Icon name="md-checkbox-outline" size={27.5} color="black" style={{marginRight: 10, marginLeft: 'auto' }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        padding: 5,
    },

    input: {
        margin: 20, 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
    }
});

export default Input;