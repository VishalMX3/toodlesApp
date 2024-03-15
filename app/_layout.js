import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../app/redux/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </Provider>
  );
}
