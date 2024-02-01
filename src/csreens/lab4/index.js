import React from "react";
import { View } from "react-native";
import ListCourse from '../lab4/list';

const Lab4 = () => {
  return (
    <View>
      <ListCourse />
    </View>
  );
};

export default React.memo(Lab4)