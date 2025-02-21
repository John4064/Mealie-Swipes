// import { Stack,Navigator } from "expo-router";
import {TouchableOpacity, Button, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./pages/Landing/Landing";
import LeaderboardPage from "./pages/Leaderboard/LeaderboardPage";
import COLORS from './styles/colors';
import { useNavigation,NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Logo() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Leaderboard', {})
  }>
      <Image
        style={{
          width: 35,
          height: 35,
          marginBottom: 5,
          borderRadius: "40%",
          borderColor: COLORS.text,
          borderWidth: 1,
        }}
      source={require('../assets/images/panda.png')}
    />
    </TouchableOpacity>
  );
}

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        //Checks if not home
        if(!(navigation.getState()?.index == 0)){
          navigation.goBack()
        }
      }}
    />
  );
} 

//Header for all of our pages
const headerOptions = {
  headerShown: true,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: '#F9E4BC',
  },
  headerLeft: () => MyBackButton(),
  headerRight: () => Logo(),
};

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="Home" component={Landing} />
        <Stack.Screen name="Leaderboard" component={LeaderboardPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
