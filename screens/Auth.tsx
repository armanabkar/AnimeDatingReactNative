import React from "react";
import { ImageBackground, View, Text } from "react-native";
import styles, { GRAY } from "../assets/styles";
import AuthField from "../components/AuthField";
import { Picker } from "@react-native-picker/picker";

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
          <AuthField placeholder="Enter your Name" />
          <AuthField placeholder="Enter your Number" />
          <AuthField placeholder="Enter your Age" />

          <Picker style={styles.textField}>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>

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
