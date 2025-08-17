import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";

import theme from "../../../styles/theme";
import logoPNG from "../../../assets/logo.png";

import { styles } from "./styles";

export const Header = () => {
  const { gray } = theme.colors;
  const { reset } = useNavigation();

  const handleNavigateHome = () => reset({ routes: [{ name: "Home" }] });

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateHome}>
        <Image source={logoPNG} style={styles.imageLogo} />
      </TouchableOpacity>

      <View style={styles.wrapperActions}>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="shopping-bag" size={24} color={gray} />
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="menu" size={24} color={gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
