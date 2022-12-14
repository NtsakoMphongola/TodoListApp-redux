import { SafeAreaView, View } from "react-native";
//import TodoHeader
import TodoHeader from "./src/components/TodoHeader";
//import TodoList
import TodoList from "./src/components/TodoList";
//import store from "./src
import store from "./src/redux/store";
//import Provider
import { Provider } from "react-redux";

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  };

  return (
    <View  style={{ padding: 15, backgroundColor: '#dec941'}}>
       <Provider store={store}>
      <RootApp />
    </Provider>
    </View>
   
  );
}
