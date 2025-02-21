import React, { useState } from 'react';
import { Button, Text,View, FlatList, Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import RecipeCard from '@/app/components/RecipeCard/RecipeCard';

interface RecipeCardData{
  name: string;
  title: string;
  content: string;
}

export default function Landing() {

  const cardItem: RecipeCardData = {
    name: "John Doe",
    title: "Welcome",
    content: "This is the card content"
  };


  const navigation = useNavigation();
  
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Landing Page</Text>
      <RecipeCard data={cardItem}></RecipeCard>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '25%'
  },
  text: {
    color: COLORS.text,
  },
});
