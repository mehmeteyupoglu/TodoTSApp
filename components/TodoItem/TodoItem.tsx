import React, { ContextType, FC, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';
import * as Constants from "../../constants"
import { colors } from "../../assets"

interface Props {
    item: Constants.Todo;
    todos: Array<Constants.Todo>;
    setTodos: (todos: Array<Constants.Todo>) => void;
}

const TodoItem: FC<Props> = ({item, todos, setTodos}) => {

    const handleDelete = (id: Number) => {
        const _todos = todos.filter(todo => todo.id !== id);

        setTodos(_todos);
    }

    const handleToggle =( id: Number) => {
        const _todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        setTodos(_todos);
    }

    const completedTodo = item.completed ? styles.completedTodo : {};
    return (
        <View style={[styles.container, completedTodo]}>
            <Text style={item.completed ? styles.listItemCompleted : styles.listItem}>{item.title}</Text>
            <View style={styles.iconGroup}>
                <Icon
                    style={{marginRight: 10}}
                    name={item.completed ? 'md-checkmark' : 'md-checkbox'}
                    size={25}
                    color={item.completed ? 'green' : '#fff'}
                    onPress={() => handleToggle(item.id)}
                />
                <Icon
                    name={"md-close"}
                    size={25}
                    color='red'
                    onPress={() => handleDelete(item.id)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#202545',
        marginVertical: 10,
        padding: 10,
    }, 

    completedTodo: {
        backgroundColor: '#00000033',
    }, 

    iconGroup: {
        flexDirection: 'row',
    }, 

    listItem: {
        flex: 1, 
        color: colors.white,
    }, 

    listItemCompleted: {
        flex: 1,
        color: colors.light,
        textDecorationLine: 'line-through',
    }
});

export default TodoItem;