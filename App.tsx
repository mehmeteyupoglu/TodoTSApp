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
import { colors } from "./assets"

const App: FC = () => {
    const [todos, setTodos] = useState<Array<Constants.Todo>>(Constants.todos);
    const noTodoStyle = todos.length === 0 ? styles.noTodos : {};
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
                    <Text style={[styles.todosLength, noTodoStyle]}>
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
    backgroundColor: colors.primaryBackground,
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
    color: colors.white,
    textDecorationLine: 'underline',
  },

  noTodo: {
    textAlign: 'center',
    borderRadius: 10, 
    paddingVertical: 20,
    fontSize: 20,
    color: colors.light,
    marginTop: 20,
    backgroundColor: colors.secondaryBackground,
  }, 

  todosLength: {
    alignSelf: 'center',
    backgroundColor: colors.successBackground,
    marginLeft: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: colors.white,
  }, 

  noTodos: {
    backgroundColor: colors.secondaryBackground,
  }
});

export default App;
