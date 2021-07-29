import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, Platform } from "react-native";
import styles from "../assets/styles";
import store from "../store";

const Suggestion = () => {
  const [suggestionLabel, setSuggestionLabel] =
    useState<string>("Random Suggestion");

  const createAlert = () => {
    Alert.alert(
      store.suggestions[Math.floor(Math.random() * store.suggestions.length)]
    );
    setSuggestionLabel(
      store.suggestions[Math.floor(Math.random() * store.suggestions.length)]
    );
    setTimeout(() => {
      setSuggestionLabel("Random Suggestion");
    }, 2000);
  };

  return (
    <TouchableOpacity style={styles.suggestions} onPress={createAlert}>
      <Text style={styles.suggestionText}>
        {Platform.OS === "web" ? suggestionLabel : "Random Suggestion"}
      </Text>
    </TouchableOpacity>
  );
};

export default Suggestion;
