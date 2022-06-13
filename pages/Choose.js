import { Text, StyleSheet, SafeAreaView, Image, Button, View, TouchableHighlight } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { chooseStyles } from '../assets/styles/ChooseStyle';


export default function Choose ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  const pressHandler = () => {
    navigation.navigate('Main')
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.backgroundImg} source={require('../assets/background.png')} />
        <Text style={styles.text} onPress={pressHandler}>Quiz</Text>
        <TouchableHighlight onPress={pressHandler} style={styles.touchTwo}>
          <Image style={styles.play} source={require('../assets/svg/info.svg')} />
        </TouchableHighlight>
        
        <View style={styles.whiteBtn}>
          <Text style={styles.whiteBtnText}>React quiz</Text>
        </View>
        <View style={styles.blackBtn}>
          <Text style={styles.blackBtnText}>vue quiz</Text>
        </View>
        <View style={styles.whiteBtn}>
          <Text style={styles.whiteBtnText}>js quiz</Text>
        </View>
        <View style={styles.blackBtn}>
          <Text style={styles.blackBtnText}>html quiz</Text>
        </View>
        <View style={styles.whiteBtn}>
          <Text style={styles.whiteBtnText}>css quiz</Text>
        </View> 
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create(chooseStyles);
