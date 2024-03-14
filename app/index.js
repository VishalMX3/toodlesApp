import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { Provider } from "react-redux";
import store from "./redux/store";

const index = () => {
  return (
    <Provider store={store}>
      <Redirect href="/(authenticate)/login" />;
    </Provider>
  );
};

export default index;

const styles = StyleSheet.create({});
