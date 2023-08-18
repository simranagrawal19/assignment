import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar} from "react-native-paper";
// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Dashboard() {
  return (
    <View style={styles.container}>
       <Text style={{fontSize:30}}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
