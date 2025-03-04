import * as React from "react";
import { Alert,Share,View,StyleSheet } from "react-native";
import { Card, Title, Paragraph, Chip, IconButton } from 'react-native-paper';
import { RecipeCardData } from "@/app/types/Recipe";

//Params for Recipe Card
interface RecipeCardProps {
  data: RecipeCardData;
}
const onShare = async (imageUrl: string) => {
  try {
    const result = await Share.share({
      message:
        imageUrl,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};



const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  const recipe = data;  // Extract the recipedata from the data prop of RecipeCardProps
  return(
    <Card style={styles.card}>
      <Card.Cover  source={require('../../../assets/images/shrimp.jpg')} />
      <View style={styles.timeContainer}>
        <Chip icon="clock" mode="outlined">{recipe?.cookTime} mins</Chip>
      </View>
      <Card.Content>
        <Title>{recipe?.name}</Title>
        <View style={styles.tagsContainer}>
          {recipe?.tags.map((tag: string) => (
            <Chip key={tag} style={styles.tag}>{tag}</Chip>
          ))}
        </View>
        <Paragraph numberOfLines={15}>{recipe?.description}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
          <IconButton
            icon="heart"
            size={20}
            onPress={() => console.log(recipe)}
          />
          <IconButton
            icon="share-variant"
            size={20}
            onPress={() => onShare(recipe?.imageUrl)}
          />
          <IconButton
            icon="book-open-variant"
            size={20}
            onPress={() => console.log('View Recipe')}
          />
      </Card.Actions>
    </Card>
    );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    elevation: 4,
    marginTop: '26%', // This will push the card down by 20% of the screen height
    minWidth: '94%',
    minHeight: '94%',
    //Temp
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-end'

  },
  timeContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  tag: {
    marginRight: 4,
    marginBottom: 4,
  },
  actions: {
    justifyContent: 'space-around',
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default RecipeCard;
