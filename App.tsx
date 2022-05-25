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
                <View style={styles.titleGroup}>
                    <Text style={styles.title}>
                        Todos
                    </Text>
                    <Text style={styles.todosLength}>
                        {todos.length}
                    </Text>
                </View>
                {
                    todos.length <= 0 && <Text style={styles.noTodo}>No todos here. Add some ☺</Text> 
                }
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

  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  }, 

  title: {
    fontSize: 20,
    color: '#fff',
    textDecorationLine: 'underline',
  },

  noTodo: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
  }, 

  todosLength: {
    alignSelf: 'center',
    backgroundColor: 'green',
    marginLeft: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: '#fff',
  }
});

export default App;
