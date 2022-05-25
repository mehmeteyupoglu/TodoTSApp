import React, { ContextType, FC, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Keyboard, Alert } from 'react-native';
import Icon from 'react-native-ionicons';
import * as Constants from "../../constants"
interface Props {
    icon: string;
    placeholder: string;
    setTodos: (todos: Array<Constants.Todo>) => void;
    todos: Array<Constants.Todo>;
}

const Input: FC<Props> = ({ icon, placeholder, setTodos, todos }) => {

    const [checked, setChecked] = useState < boolean > (false);
    const [text, setText] = useState < string > ('');

    const handlePress = () => {
        if (text.length <= 0) {
            Alert.alert(
                "Add To Do",
                "Please add a todo item",
                [{ text: "OK"}],
                { cancelable: true }
            );
            return;
        }

        const todo: Constants.Todo = {
            id: todos.length + 1,
            title: text,
            completed: false
        }
        const _todos = [...todos, todo]
        setTodos(_todos);
        Keyboard.dismiss();

        // set color and icon for checkbox
        setChecked(true);
        setTimeout(() => {
            setChecked(false);
            setText('');
        }, 1000)
    }

    const handleChangeText = (text: string) => {
        setText(text);
    }

    return (
        <View style={styles().container}>
            <View style={styles().input}>
                <TextInput
                    placeholderTextColor='#555'
                    placeholder={placeholder}
                    onChangeText={handleChangeText}
                    value={text}
                />
                <Icon
                    name={checked ? 'md-checkmark' : icon}
                    size={27.5}
                    color="black"
                    style={styles(checked).checkboxIcon}
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