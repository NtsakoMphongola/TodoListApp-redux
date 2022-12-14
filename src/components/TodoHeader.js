import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
//import firebase
//import { firebase } from '@react-native-firebase/firestore';

const TodoHeader = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
 // const ref=firebase().collection('todos')
  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("You need to enter a task");
      setTodo("");
      return;
    }
    dispatch(
      addTask({
        task: todo,
      })
    );
    setTodo("");
  };

  return (
    <View>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.content}>
        <TextInput style={styles.txtInput} placeholder="Add todo" onChangeText={setTodo} value={todo} />
        <TouchableOpacity style={styles.touch} onPress={onSubmitTask} >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 5,
  },
  touch: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
  }
});
