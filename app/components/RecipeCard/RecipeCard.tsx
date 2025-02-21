import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

// Define the props type for LeftContent
interface LeftContentProps {
  size?: number; // You can add other props as needed
}

//Update this with the DTO of mealie api
interface RecipeCardData{
    name: string;
    title: string;
    content: string;
}

interface RecipeCardProps {
    data: RecipeCardData;
}



// Define the LeftContent component with typed props
const LeftContent: React.FC<LeftContentProps> = (props) => (
  <Avatar.Icon {...props} icon="folder" />
);

// Define the MyComponent component
const RecipeCard: React.FC<RecipeCardProps> = ({data}) => (
  <Card>
    <Card.Title title={data.title} subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default RecipeCard;
