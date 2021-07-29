import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles, { GRAY, PRIMARY_COLOR } from "../assets/styles";

export default function Auth({ navigation }: { navigation: any }) {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerAuth}>
        <View>
          <Text style={{ fontSize: 22 }}>Welcome to</Text>
          <Text style={styles.authTitle}>Anime Dating</Text>
        </View>
        <View style={{ marginBottom: 50 }}>
          <TextInput
            placeholder="Enter your Name"
            style={styles.textField}
            editable
            maxLength={40}
          />
          <TextInput
            placeholder="Enter your Number"
            style={styles.textField}
            editable
            maxLength={40}
          />
          <TextInput
            placeholder="Enter your Age"
            style={styles.textField}
            editable
            maxLength={40}
          />
          <Text
            style={styles.startButton}
            onPress={() => navigation.navigate("Tab")}
          >
            Let's Go!
          </Text>
        </View>
        <Text style={{ color: GRAY }}>
          *Currently only available in the USA.
        </Text>
      </View>
    </ImageBackground>
  );
}
