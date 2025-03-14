import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import { FAB } from "react-native-paper";
import { RecipeCardData } from "@/app/types/Recipe";
import { GlobalContext } from "@/app/contexts/GlobalContext";
import { getRecipes } from "@/app/actions/RecipeActions";

const Styles = StyleSheet.create({
  heartfab: {
    position: "absolute",
    right: 0,
    bottom: 50,
    margin: 48,
  },
  container: {
    backgroundColor: COLORS.background,
    height: "100%",
  },
  text: {
    color: COLORS.text,
  },
});

//Example FAB
{
  /* <FAB icon="plus" style={Styles.heartfab} onPress={() => console.log('Pressed')} /> */
}

//Home Landing Page
export default function Landing() {
  const [rawRecipeData, setRawRecipeData] = useState({});

  const { jwtToken, setJwtToken } = useContext(GlobalContext);

  useEffect(() => {
    if(Object.keys(rawRecipeData).length != 0){
      //Process the rawRecipeData
    }
  }, [rawRecipeData]); 



  //Replace this in future ofc
  const cardItem: RecipeCardData = {
    source: "AllRecipes",
    name: "Mac n Cheese",
    description:
      "Mac n cheese is a classic comfort food consisting of pasta baked in a creamy cheese sauce. The dish typically features macaroni as the pasta, which is smothered in a rich, velvety sauce made from a blend of cheeses such as cheddar, parmesan, and sometimes additional ingredients like breadcrumbs or ham. When served hot, the cheese sauce is melted and bubbly, creating a golden-brown crust on top that adds a satisfying crunch to each bite.",
    imageUrl: "https://picsum.photos/700",
    cookTime: 20,
    tags: ["cheese", "carb"],
  };

  return (
    <View style={Styles.container}>
      {/* Main Card */}
      <RecipeCard data={cardItem}></RecipeCard>
      <FAB
        icon="plus"
        style={Styles.heartfab}
        onPress={() => setRawRecipeData(getRecipes(jwtToken))}
      />
      <FAB
        icon="heart"
        style={{ bottom: 20, left: 25,position: "absolute" }}
        onPress={() => console.log(rawRecipeData)}
      />
    </View>
  );
}
