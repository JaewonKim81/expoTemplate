import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Detail')}>
        Go to Detail
      </Button>
    </View>
  );
};

export default HomeScreen;
