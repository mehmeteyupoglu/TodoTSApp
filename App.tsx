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
import { Input, Header } from "./components"
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
            </View>
            <View style={styles.todos}>
                <FlatList
                    scrollEnabled={true}
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
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

  listItem: {
    flex: 1, 
    color: '#fff',
    marginVertical: 10,
    padding: 10,
    paddingVertical: 15,
    backgroundColor: '#00000033',
  }
});

export default App;
