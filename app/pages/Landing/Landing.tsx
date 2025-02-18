import React, { useState } from 'react';
import { Button, Text,View, FlatList, Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import RecipeCard from '@/app/components/RecipeCard/RecipeCard';



export default function Landing() {


  const navigation = useNavigation();
  const data =[{"name": "Bella", number:32},{"name": "Greg", number:6},{"name": "Peter", number:9}]
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Landing Page</Text>
      <RecipeCard data={data[0]}></RecipeCard>
    </View>
  );
}

const styles = StyleSheet.create({
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
