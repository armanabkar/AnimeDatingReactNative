import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY } from "../assets/styles";

const ProfileItem = ({ age, neighborhood, name }: ProfileItemT) => (
  <View style={styles.containerProfileItem}>
    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      {age} - {neighborhood}
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={18} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>Straight, Single, 5"10</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="pizza" size={18} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>
        Tea Totaller, Loves Photography & Travel
      </Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="airplane" size={18} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>Beaches, Mountain, Cafe, Movies</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="calendar" size={18} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>Last seen: 23h ago</Text>
    </View>
  </View>
);

export default ProfileItem;
