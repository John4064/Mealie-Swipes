import React, { useState } from 'react';
import { Text,View, FlatList, Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: 'center',
      alignItems: 'center',
      // paddingBottom: '25%'
    },
    text: {
      color: COLORS.text,
    },
  });


export default function LeaderboardPage() {
  

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Leaderboard Page</Text>
    </View>
  );
}