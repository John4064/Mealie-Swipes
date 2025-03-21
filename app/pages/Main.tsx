import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useEffect } from "react";
import {generateToken} from '@/app/actions/AuthActions';
import { View, ActivityIndicator } from "react-native";
import {TouchableOpacity, Button, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "@/app/pages/Landing/Landing";
import LeaderboardPage from "@/app/pages/Leaderboard/LeaderboardPage";
import COLORS from '@/app/styles/colors';
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
      source={require('../../assets/images/panda.png')}
    />
    </TouchableOpacity>
  );
}

//Header for all of our pages
const headerOptions = {
  
  headerShown: true,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: '#F9E4BC',
  },
  headerRight: () => Logo(),
};


const MyActivityIndicator = () => {
	return (
      	<View style={{ flex: 1, justifyContent: "center"}}>
			<ActivityIndicator size="large" color="#00ff00" />
      	</View>
    );
}






export default function Main({children} :any) {
    const { jwtToken, setJwtToken } = useContext(GlobalContext);
    const changeGlobalVar = (val: any) => {
        setJwtToken(val);   
    };

    useEffect(() => {
        async function fetchMyToken(){

            let tempJwtToken: string = await generateToken()
            // console.log("Inside effect "+tempJwtToken)
                changeGlobalVar(tempJwtToken)
            }
            fetchMyToken();
    // console.log(jwtToken)
    }, [jwtToken]);

    if(jwtToken!= ""){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={headerOptions}>
                    <Stack.Screen name="Home" component={Landing}/>
                    <Stack.Screen name="Leaderboard" component={LeaderboardPage}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }else{
        // console.log("pending")
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{  headerShown: true}}>
                    <Stack.Screen name="Loading" component={MyActivityIndicator}/>
                </Stack.Navigator>
            </NavigationContainer>

        )
    }

}
