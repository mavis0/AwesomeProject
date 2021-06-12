import React, {useState} from "react";
import { AppRegistry, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, LinearProgress  } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import AntIcon from 'react-native-vector-icons/AntDesign';



const Flex = () => {
  const [age, setAge] = useState(28);
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }} >
        <AntIcon name="arrowleft" color="#000000" size={30} style={{ marginLeft: 20}}/>
        <LinearProgress color="#61cad6" variant="determinate" value={0.125}
          style={{ marginLeft: 20, height: 4, width: 250}}
          trackColor="#f0f0f0"
         />
        <Text style={{ marginLeft: 40 }}>1/8</Text>
      </View>
      <View style={{ flex: 15 }} >
        <Text style={{ fontSize: 27, margin: 30, flex: 1}}>How old are you?</Text>
        <View style={{ flex: 5, alignItems: "center" }}>
          <Text style={{ fontSize: 100}}>{age}</Text>
          <Slider
            value={age}
            maximumValue={100}
            minimumValue={0}
            step={1}
            onValueChange={(value) => setAge(value)}
            style={{ width: 300, marginTop: 50 }}
          />
        </View>
      </View>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }} >
        <Button title="Continue" size={40} buttonStyle={{width: 150, backgroundColor: "#5cccd8", borderRadius: 20}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flex;