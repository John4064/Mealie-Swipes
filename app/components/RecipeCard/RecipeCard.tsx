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

const styles = StyleSheet.create({
  card: {
    margin: 4,
    elevation: 5,
    // marginTop: '50%', // This will push the card down by 20% of the screen height
    marginTop: '30%',
    minWidth: '92%',
  },
  timeContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
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
    // borderColor: 'red',
    // borderWidth: 2,

    },
});

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  const recipe = data;  // Extract the recipedata from the data prop of RecipeCardProps
  return(
    <Card  style={styles.card} >
      <Card.Cover   style={{ height: '50%' }} source={require('../../../assets/images/shrimp.jpg')} />
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
        <Paragraph numberOfLines={10}>{recipe?.description}</Paragraph>


        {/* <View style={{'minHeight': '25%'}}></View> */}

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



export default RecipeCard;
