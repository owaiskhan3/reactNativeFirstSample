import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require("./assets/burger.jpg")} style={styles.image} />
        </View>
        <View style={styles.circles}>
          <View style={[styles.circle, { backgroundColor: "grey" }]}></View>
          <View style={[styles.circle, { backgroundColor: "grey" }]}></View>
          <View style={[styles.circle, { backgroundColor: "#fd7a21" }]}></View>
        </View>

        <View style={styles.mainHeading}>
          <Text style={styles.heading}>Heading 3</Text>
        </View>
        <View>
          <Text style={styles.paragraph}>
            Message: First App of React Native using Expo. Learn something new
            everyday.
          </Text>
        </View>
        <View>
          <Text style={styles.explore}>Explore</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            title={"Login"}
            onPress={() => alert("Buttton Pressed")}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* <View>
        <TouchableWithoutFeedback
          style={styles.button}
          title={"Login"}
          onPress={() => alert("Buttton Pressed")}
        >
          <Text>Login</Text>
        </TouchableWithoutFeedback>
      </View> */}

        {/* <ScrollView> */}

        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // justifyContent: "center"
  },
  mainHeading: {
    marginTop: 20,
    marginBottom: 20
  },
  image: {
    resizeMode: "contain",
    height: height / 2,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 20,
    textAlign: "center"
  },
  paragraph: {
    width: (3 * width) / 4,
    fontSize: 12,
    textAlign: "center"
  },
  explore: {
    color: "#ff00e7",
    marginTop: 50
  },

  message: {
    borderWidth: 2,
    borderColor: "#f5f5f5",
    textAlign: "center",
    marginBottom: 30
  },

  button: {
    width: width / 2,
    alignItems: "center",
    backgroundColor: "#fd7a21",
    color: "#ffffff",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    margin: 30,
    marginTop: 10
  },
  circles: {
    display: "flex",
    flexDirection: "row",
    height: 20
  },
  circle: {
    marginTop: 10,
    marginLeft: 2,
    marginRight: 2,
    width: 15,
    height: 15,
    borderRadius: 50
  }
});
