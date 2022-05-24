import React, { FC, useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = ({ icon, placeholder, onChangeText }) => {

    const [checked, setChecked] = useState<boolean>(false);
    const handlePress = () => {
        // set color and icon for checkbox
        setChecked(true);
        setTimeout(() => {
            setChecked(false);
        }, 1000)
    }

    return (
        <View style={styles().container}>
            <View style={styles().input}>
                <Icon name={icon} size={22} color="#555" style={styles().icon} />
                <TextInput
                    placeholderTextColor='#555'
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
                <Icon
                    name={checked ? "md-checkbox" : "md-checkbox-outline"}
                    size={27.5}
                    color="black"
                    style={ styles(checked).checkboxIcon }
                    onPress={handlePress}
                />
            </View>
        </View>
    );
};

const styles = (checked = false) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        margin: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
    },

    icon: {
        padding: 5,
    },

    checkboxIcon: {
        marginRight: 10,
        marginLeft: 'auto', 
        color: checked ? 'green' : 'black'
    }
});

export default Input;