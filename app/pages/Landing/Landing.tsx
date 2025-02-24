import React from 'react';
import {View, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import RecipeCard from '@/app/components/RecipeCard/RecipeCard';
import { FAB } from 'react-native-paper';

//Create data struct for all files to use and update in future
interface RecipeCardData{
  source: string;
  title: string;
  content: string;
}



export default function Landing() {

  const Styles = StyleSheet.create({
    heartfab: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      margin: 32
    },
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingBottom: '25%'
    },
    text: {
      color: COLORS.text,
    },
  });


  //Replace this in future ofc
  const cardItem: RecipeCardData = {
    source: "AllRecipes",
    title: "Recipe",
    content: "This is the card content"
  };


  const navigation = useNavigation();
  
  return (
    <View style={Styles.container}>
      {/* Main Card */}
      <RecipeCard data={cardItem}></RecipeCard>

      <FAB icon="plus" style={Styles.heartfab} onPress={() => console.log('Pressed')} />
    </View>
  );
}
