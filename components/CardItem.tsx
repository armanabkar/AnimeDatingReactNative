import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
} from "../assets/styles";
import K from "../Constants/K";

const CardItem = ({
  neighborhood,
  hasActions,
  hasVariant,
  image,
  name,
  age,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;
  const fullHeight = Dimensions.get("window").height;

  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? fullHeight / 4.5 : fullHeight / 1.8,
      margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 0,
      color: "#363636",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      <Image source={{ uri: `${K.baseURL}${image}` }} style={imageStyle} />

      {neighborhood && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            {age} - {neighborhood}
          </Text>
        </View>
      )}

      <Text style={nameStyle}>{name}</Text>

      {!neighborhood && (
        <View style={styles.status}>
          <View
            style={
              isOnline[Math.floor(Math.random() * isOnline.length)]
                ? styles.online
                : styles.offline
            }
          />
          <Text style={styles.statusText}>
            {isOnline[Math.floor(Math.random() * isOnline.length)]
              ? "Online"
              : "Offline"}
          </Text>
        </View>
      )}

      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Icon name="star" color={STAR_ACTIONS} size={14} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={LIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Icon name="flash" color={FLASH_ACTIONS} size={14} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;

const isOnline: boolean[] = [true, false];
