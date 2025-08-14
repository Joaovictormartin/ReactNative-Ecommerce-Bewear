import Feather from "@expo/vector-icons/Feather";
import { Image, TouchableOpacity, View } from "react-native";

import logoPNG from "../../../assets/logo.png";

import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logoPNG} style={styles.imageLogo} />

      <View style={styles.wrapperActions}>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="shopping-bag" size={24} color="#656565" />
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="menu" size={24} color="#656565" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
