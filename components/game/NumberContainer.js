import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    padding: deviceHeight < 380 ? 12 : 24,
    margin: deviceHeight < 380 ? 12 : 24,
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceHeight > 380 ? 28 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
