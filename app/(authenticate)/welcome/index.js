import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userRedux";

const WelcomeScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("entering welcome useefct");
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        const user = JSON.parse(await AsyncStorage.getItem("user"));
        if (token !== null && user !== null) {
          dispatch(loginSuccess({ user, token }));
          router.replace("/(tabs)/home");
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLoginStatus();
  }, [dispatch]);

  return (
    <LinearGradient
      colors={[
        "#ffffff",
        "#e2e2ff",
        "#dadcff",
        "#dadcff",
        "#e2e2ff",
        "#ffffff",
      ]}
      style={styles.container}
    >
      <Text style={styles.creator}>Welcome To</Text>
      <Text style={styles.heading}>Toodles App</Text>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/e-shop-74124.appspot.com/o/task.png?alt=media&token=9a8d0a19-546e-40c6-8d4c-7f1d355d734a",
          width: 120,
          height: 120,
        }}
      />
      <Text style={styles.quote}>
        "The secret of getting ahead is getting started."
      </Text>
      <Text style={styles.creator}>Created by Vishal Pundhir</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login Now" onPress={() => router.replace("/login")} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0C1E31",
    marginTop: -50,
  },
  quote: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0C1E31",
    marginBottom: 15,
    textAlign: "center",
  },
  creator: {
    fontSize: 14,
    color: "#gary",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "80%",
  },
});

export default WelcomeScreen;
