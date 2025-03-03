import * as React from "react";
// import { Avatar, Button, Card, Text } from "react-native-paper";
import { View,StyleSheet, TouchableOpacity } from "react-native";
import { Avatar,Card, Title, Paragraph, Chip, IconButton } from 'react-native-paper';



// Define the props type for LeftContent
interface LeftContentProps {
  size?: number; // You can add other props as needed
}

//Update this with the DTO of mealie api
interface RecipeCardData {
  source: string;
  name: string;
  description: string;
  imageUrl: string;
  cookTime: number;
  tags: [string];
}

interface RecipeCardProps {
  data: RecipeCardData;
}

//{ uri: 'https://picsum.photos/203' }

// Define the LeftContent component with typed props
const LeftContent: React.FC<LeftContentProps> = (props) => (
  <TouchableOpacity onPress={() => console.log(3)}>
    <Avatar.Icon {...props} icon="biohazard" />
  </TouchableOpacity>
);  

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  const recipe = data.recipe;  // Extract the recipe from the data prop
  return(
    <Card style={styles.card}>
      <Card.Cover source={require('../../../assets/images/shrimp.jpg')} />
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
        <Paragraph numberOfLines={3}>{recipe?.description}</Paragraph>
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
          onPress={() => console.log('Share')}
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
    marginTop: '50%', // This will push the card down by 20% of the screen height
    minWidth: '94%',
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
  },
});

export default RecipeCard;
