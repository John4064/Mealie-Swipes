import React, { useState } from 'react';
import { Text,View, FlatList, Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';


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


export default function LeaderboardPage() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Leaderboard Page</Text>
    </View>
  );
}