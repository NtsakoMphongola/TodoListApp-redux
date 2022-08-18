import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
//Ionicons
import { Ionicons } from "@expo/vector-icons";
//import useSelector from "react-redux";
import { useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { editTask } from "../redux/taskSlice";
import { doneTask } from '../redux/taskSlice';
import { useDispatch } from "react-redux";
//import AntDesign - Edit
import { AntDesign } from '@expo/vector-icons';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks);
  // console.log(todos);
  const data = [
    {
      id: 1,
      title: "Learn React Native",
    },
    {
      id: 2,
      title: "Learn Redux Toolkit",
    },
  ];

  //delete item by checking if id is equal to the id of the item
  const onDelete = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  //Edit item
  // const onEdit = (id) => {
  //   dispatch(
  //     editTask({
  //       id: id,
  //     })
  //   );
  // };
  //Update item
  // const onDone = (id) => {
  //   dispatch(
  //     doneTask({
  //       id: id,
  //     })
  //   );
  // };

  //render Item function with each buttons
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        {/* Delete section */}
        <TouchableOpacity
          onPress={() => onDelete(item.id)}
        >
          <Ionicons name="trash" size={30} color="red" />
        </TouchableOpacity>
        {/* Edit section */}
        {/* <TouchableOpacity
          onPress={() => onEdit(item.id)}
        >
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity> */}
        {/* Done section */}
        {/* <TouchableOpacity
          onPress={() => onDone(item.id)}
        >
          <Ionicons name="checkmark-done-circle-sharp" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#d9d",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },

});
