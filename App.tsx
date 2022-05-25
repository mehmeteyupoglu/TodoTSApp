/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { Input, Header, TodoItem } from "./components"
import * as Constants from "./constants"

// import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: FC = () => {
    const [todos, setTodos] = useState<Array<Constants.Todo>>(Constants.todos);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Header text="Todo App"></Header>
            <Input 
                icon='md-add' 
                placeholder='Add todos' 
                setTodos={setTodos}
                todos={todos}
            />
            <View style={styles.todos}>
                <Text style={styles.todo}>Todos</Text>
                <FlatList
                    scrollEnabled={true}
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <TodoItem item={item} todos={todos} setTodos={setTodos}/>}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    backgroundColor: '#363d58',
  }, 

  todos: {
    marginHorizontal: 20,
  }, 

  todo: {
    color: '#fff',
  }, 
});

export default App;
