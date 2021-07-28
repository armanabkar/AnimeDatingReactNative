import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Icon, Message } from "../components";
import characters from "../assets/data/characters";
import styles, { DARK_GRAY } from "../assets/styles";

const Messages = () => (
  <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.containerMessages}>
      <View style={styles.top}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={characters.slice(0, 11)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Message
              image={item.image}
              name={item.name}
              lastMessage={item.message}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
);

export default Messages;
