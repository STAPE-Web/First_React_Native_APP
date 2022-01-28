import { Text, StyleSheet, SafeAreaView, Image, Button, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import Navigator from './navigate'


export default () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigator/>
    );
  }
};

const styles = StyleSheet.create({
  
});