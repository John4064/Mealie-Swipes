import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
// Define the props type for LeftContent
interface LeftContentProps {
  size?: number; // You can add other props as needed
}

//Update this with the DTO of mealie api
interface RecipeCardData{
    source: string;
    title: string;
    content: string;
}

interface RecipeCardProps {
    data: RecipeCardData;
}



// Define the LeftContent component with typed props
const LeftContent: React.FC<LeftContentProps> = (props) => (
        <TouchableOpacity onPress={()=>console.log(3)} >
    <Avatar.Icon {...props} icon="biohazard" />
  </TouchableOpacity>
);

// Define the MyComponent component
const RecipeCard: React.FC<RecipeCardProps> = ({data}) => (
  <Card style={{borderRadius:'10%',marginTop: '24%', minWidth: '98%', minHeight: '98%'}}>
    <Card.Title titleVariant={"titleLarge"} title={data.title} left={LeftContent} />
    <Card.Content>
      <Text>{data.source}</Text>
    </Card.Content>
    <Card.Cover height={200} source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button mode="contained-tonal" onPress={() => console.log('Pressed')} style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>Link</Button>
    </Card.Actions>
  </Card>
);

export default RecipeCard;
