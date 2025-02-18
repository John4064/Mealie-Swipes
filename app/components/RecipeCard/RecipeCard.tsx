import { View } from "react-native";
import { Card, Text, Button} from "@rneui/themed";

export default function RecipeCard({ data }: { data: any }) {
  return (
    <Card>
      <Text>Word of the Day</Text>
      <Text h4>be-nev-o=lent</Text>
      <Text>adjective</Text>
      <Text>
        well meaning and kindly.
      </Text>
      <Button size="sm" type="clear">
        Learn More
      </Button>
    </Card>
  );
}
