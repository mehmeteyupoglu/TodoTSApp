import React, { FC } from 'react';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-ionicons';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = ({icon, placeholder, onChangeText}) => {
    return (
        <View>
            <View>
                <Icon name={icon} size={22} color="#2c3e50"/>
            </View>
            <View>
                <TextInput placeholderTextColor='#555' placeholder={placeholder} onChangeText={onChangeText}/>
            </View>
        </View>
    );
};

export default Input;