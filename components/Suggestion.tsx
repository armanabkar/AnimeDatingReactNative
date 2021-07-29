import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../assets/styles";

const Suggestion = () => (
  <TouchableOpacity style={styles.suggestions}>
    <Text style={styles.suggestionText}>Random Suggestion</Text>
  </TouchableOpacity>
);

export default Suggestion;
