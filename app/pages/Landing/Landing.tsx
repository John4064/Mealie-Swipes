import React from 'react';
import {View, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import RecipeCard from '@/app/components/RecipeCard/RecipeCard';
import { FAB } from 'react-native-paper';

//Create data struct for all files to use and update in future
interface RecipeCardData {
  source: string;
  name: string;
  description: string;
  imageUrl: string;
  cookTime: number;
  tags: [string];
}



export default function Landing() {

  const Styles = StyleSheet.create({
    heartfab: {
      position: 'absolute',
      right: 0,
      bottom: 50,
      margin: 48
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
    name: "Mac n Cheese",
    description: "Mac n cheese is a classic comfort food consisting of pasta baked in a creamy cheese sauce. The dish typically features macaroni as the pasta, which is smothered in a rich, velvety sauce made from a blend of cheeses such as cheddar, parmesan, and sometimes additional ingredients like breadcrumbs or ham. When served hot, the cheese sauce is melted and bubbly, creating a golden-brown crust on top that adds a satisfying crunch to each bite.",
    imageUrl: "https://picsum.photos/700",
    cookTime: 20,
    tags: ['cheese'],
  };
  const cardProp ={
    recipe: cardItem
  }

  console.log(cardItem)
  const navigation = useNavigation();
  
  return (
    <View style={Styles.container}>
      {/* Main Card */}
      <RecipeCard data={cardProp}></RecipeCard>

      <FAB icon="plus" style={Styles.heartfab} onPress={() => console.log('Pressed')} />
    </View>
  );
}
