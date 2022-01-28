import { Text, StyleSheet, SafeAreaView, Image, Button, View, TouchableHighlight } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { MainStyle } from '../assets/styles/MainStyle';


export default function Main ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
  });

  const pressHandler = () => {
    navigation.navigate('Choose')
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.backgroundImg} source={require('../assets/background.png')} />
        <Text style={styles.text}>Quiz</Text>
        <TouchableHighlight onPress={pressHandler} style={styles.touchTwo}>
          <Image style={styles.play} source={require('../assets/svg/play.svg')} />
        </TouchableHighlight>
        <Text style={styles.h1}>Wellcome</Text>
        <TouchableHighlight onPress={pressHandler} style={styles.touch}>
          <Image style={styles.getStarted} source={require('../assets/svg/getStarted.svg')} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create(MainStyle);