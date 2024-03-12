# toodlesApp-Documentation

<div align="center" style="margin: 30px;">
    <a href="https://marble-assignment.onrender.com/">
    <img alt="refine logo" src="https://firebasestorage.googleapis.com/v0/b/e-shop-74124.appspot.com/o/dashboard.png?alt=media&token=e0aef0ae-38e0-4b0a-b040-09431c630a1d">
    </a>
</div>
<br/>

[Deployed API](https://toodlesapp.onrender.com)

View the [Source Code](https://github.com/VishalMX3/toodlesApp).

### Running the app on web browser

To run on web install node modules after cloning to your local pc

```bash
npm install
```

Run Using

```bash
npx expo start --web
```

## App Overview

There are 3 tabs - home, calendar and profile.

Home tab - View tasks for today, add tasks, mark them as completd, view info for each task

Calendar tab - Shows us the tasks completed for a particular date.

Profile Tab - Shows a statistics of total pending tasks and total completed tasks. It compares these two visually using `react-native-chart-kit`

## User registration and login authorization

Created two endpoints /register and /login in REST API.

User Register - User info is sent to /register endpoint where it get saved in the MongoDB cloud database using the User Model.

User Login - User info is sent to /login endpoint where it finds the user by email and checks for correct password. On successful login the API sends back a unique authorization token (using JWT sign) which we store in async storage for that user.

```javascript
axios.post("http://localhost:3000/login", user).then((response) => {
  const token = response.data.token;
  console.log("token", token);
  AsyncStorage.setItem("authToken", token);
  router.replace("/(tabs)/home");
});
```

We create a useEffect in login to check if we already have a token in AsyncStorage then we are gonna show the user home screen directly.

```javascript
useEffect(() => {
  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        router.replace("/(tabs)/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  checkLoginStatus();
}, []);
```
