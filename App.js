import { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, ScrollView } from 'react-native';
import { 
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query
 } from 'firebase/firestore';
import { db, TODOS_REF } from './firebase/Config';
import styles from './style/style';
import { TodoItem } from './components/TodoItem';

export default function App() {
  
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, TODOS_REF), orderBy('todoItem'))
    onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  }, []);

  const addNewTodo = async () => {
    try {
      if (newTodo.trim() !== "") {
        await addDoc(collection(db, TODOS_REF), {
          done: false,
          todoItem: newTodo
        })
        setNewTodo('');
      }
    }
    catch (error) {
      console.log(error.message);
    }
  }

  const removeTodo = async (id) => {
    try {
      await deleteDoc(doc (db, TODOS_REF, id));
    }
    catch (error) {
      console.log(error.message);
    }
  }

  const removeTodos = async() => {
    try {
      const querySnapshot = await getDocs(collection(db, TODOS_REF));
      querySnapshot.forEach((todo) => {
        removeTodo(todo.id);
      })
    }
    catch (error) {
      console.log(error.message);
    }
  }

  const createTwoButtonAlert = () => Alert.alert(
    "Todolist", "Remove all items?", [{
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { 
      text: "OK", onPress: () => removeTodos()
    }],
    { cancelable: false }
  );

  let todosKeys = Object.keys(todos);
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todolist ({todosKeys.length})</Text>
      <View style={styles.newItem}>
        <TextInput
          placeholder='Add new todo'
          value={newTodo}
          style={styles.textInput}
          onChangeText={setNewTodo}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button 
          title="Add new Todo item"
          onPress={() => addNewTodo()}
        />
      </View>
      <View style={styles.todosContainer} >
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {todosKeys.length > 0 ? (
            todosKeys.map((key, i) => (
              <TodoItem
                key={key}
                todoItem={todos[i].todoItem}
              />
            ))
          ) : (
            <Text style={styles.infoText}>There are no items</Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.buttonStyle}>
        <Button 
          title="Remove all todos" 
          onPress={() => createTwoButtonAlert()} />
      </View>
    </View>
  );
}