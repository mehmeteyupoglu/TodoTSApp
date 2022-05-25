import React, {FC, useState} from 'react';
import {
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
                    <View style={styles.stats}>
                        <Text style={[styles.todosLength]}>
                            {todos.length}
                        </Text>
                        <Text style={[styles.todosLength, styles.completedTodo]}>
                            {todos.filter(todo => todo.completed).length}
                        </Text>
                        <Text style={[styles.todosLength, styles.uncompletedTodo]}>
                            {todos.filter(todo => !todo.completed).length}
                        </Text>
                    </View>
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
    justifyContent: 'space-between',
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

  stats: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  }, 

  todosLength: {
    alignSelf: 'center',
    backgroundColor: colors.infoBackground,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: colors.white,
  }, 

  completedTodo: {
    backgroundColor: colors.successBackground,  
  }, 

  uncompletedTodo: {
    backgroundColor: colors.errorBackground,
  }
});

export default App;
