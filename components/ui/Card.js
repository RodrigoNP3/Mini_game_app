import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: deviceHeight < 380 ? 18 : 36,
    borderRadius: 8,
    //Android Shadow
    elevation: 4,
    //Only to add shadow to IOS {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: Colors.primary800,
    // }
    padding: 16,
  },
});

export default Card;
