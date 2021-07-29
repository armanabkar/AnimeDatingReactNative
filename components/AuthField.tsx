import React from "react";
import { TextInput } from "react-native-gesture-handler";
import styles from "../assets/styles";
import { FieldT } from "../types";

function AuthField({ placeholder }: FieldT) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textField}
      editable
      maxLength={30}
    />
  );
}

export default AuthField;
