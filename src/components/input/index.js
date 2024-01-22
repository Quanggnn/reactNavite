import { View,SafeAreaView,TextInput,Text } from "react-native-web";
import {styles} from "./style"

const Input = () => {
  
  return (
    <SafeAreaView>
      <TextInput
        style={styles.inputx}
      />
    </SafeAreaView>
  );
};



export default Input;