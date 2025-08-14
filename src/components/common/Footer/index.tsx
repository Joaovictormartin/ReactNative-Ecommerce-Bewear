import { Text, View } from "react-native";

import { styles } from "./styles";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.copyright}>© 2025 Copyright BEWEAR</Text>
      <Text style={styles.rightsReserved}>Todos os direitos reservados.</Text>
    </View>
  );
};
