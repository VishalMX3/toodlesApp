import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  logoutFailure,
  logoutSuccess,
  logoutStart,
} from "../../redux/userRedux";
import { useDispatch } from "react-redux";

const index = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.user.currentUser.user);
  const router = useRouter();
  const totalCompletedTasks = todos.filter(
    (todo) => todo.status === "completed"
  ).length;
  const totalPendingTasks = todos.filter(
    (todo) => todo.status === "pending"
  ).length;

  useEffect(() => {
    setCompletedTasks(totalCompletedTasks);
    setPendingTasks(totalPendingTasks);
  }, [todos]);

  const handleLogout = async () => {
    try {
      dispatch(logoutStart());

      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("user");
      router.replace("/welcome");
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFailure());
    }
  };
  // console.log("comp", completedTasks);
  // console.log("pending", pendingTasks);
  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        // alignItems: "center",
        gap: 10,
        // flexWrap: "wrap",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={{
            uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c9f4a40760693.578c9a4699778.gif",
          }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Hi {user.name}
          </Text>
          <Text style={{ fontSize: 15, color: "gray", marginTop: 4 }}>
            Your total tasks: {todos.length}
          </Text>
        </View>
        <Pressable
          onPress={handleLogout}
          style={{
            padding: 10,
            backgroundColor: "blue",
            borderRadius: 5,
            marginLeft: "auto",
          }}
        >
          <Text style={{ color: "#fff" }}>Logout</Text>
        </Pressable>
      </View>

      <View style={{ marginVertical: 12, gap: 36 }}>
        <Text>Tasks Overview</Text>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            marginVertical: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#F6FF6B",
              width: "100%",
              padding: 10,
              borderRadius: 8,
              // flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              {pendingTasks}
            </Text>
            <Text style={{ marginTop: 4 }}>pending tasks</Text>
          </View>
          <View
            style={{
              backgroundColor: "#66FF98",
              padding: 10,
              width: "100%",
              borderRadius: 8,
              // flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              {completedTasks}
            </Text>
            <Text style={{ marginTop: 4 }}>completed tasks</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          // flex: 1,
          backgroundColor: "#89CFF0",
          padding: 10,
          borderRadius: 6,
          marginTop: 15,
          height: "auto",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", color: "black", fontSize: 20 }}>
          Doing your best is enough, {user.name}!
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          style={{ width: 120, height: 120 }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/e-shop-74124.appspot.com/o/task.png?alt=media&token=9a8d0a19-546e-40c6-8d4c-7f1d355d734a",
          }}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
