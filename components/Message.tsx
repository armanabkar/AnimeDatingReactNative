import React from "react";
import { Text, View, Image } from "react-native";
import { MessageT } from "../types";
import styles from "../assets/styles";
import K from "../Constants/K";

const Message = ({ image, name }: MessageT) => (
  <View style={styles.containerMessage}>
    <Image source={{ uri: `${K.baseURL}${image}` }} style={styles.avatar} />
    <View>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text style={styles.message}>
        {messages[Math.floor(Math.random() * messages.length)].replace(
          /(.{40})..+/,
          "$1..."
        )}
      </Text>
    </View>
  </View>
);

export default Message;

const messages = [
  "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
  "Someone like you. Someone who'll rattle the cages.",
  "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
  "Bats frighten me. It's time my enemies shared my dread.",
  "It's not who I am underneath but what I do that defines me.",
  "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
  "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
  "And as for the television's so-called plan, Batman has no jurisdiction.",
  "This is what happens when an unstoppable force meets an immovable object.",
  "You want order in Gotham. Batman must take off his mask and turn himself in.",
];
