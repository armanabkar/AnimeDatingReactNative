import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { CardItem, Icon } from "../components";
import characters from "../assets/data/characters";
import styles, { DARK_GRAY } from "../assets/styles";

const Matches = () => (
  <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={styles.title}>Matches</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={characters.slice(0, 7)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <CardItem
              image={item.image}
              name={item.name}
              isOnline={item.isOnline}
              hasVariant
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
);

export default Matches;
