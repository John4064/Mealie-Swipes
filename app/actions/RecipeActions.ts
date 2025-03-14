const baseUrl = process.env.EXPO_PUBLIC_BASEURL;
import axios from "axios";

function formatParamsToString(params: any) {
  var tempParams = "?";
  for (let key in params) {
    tempParams += "?" + key + "=" + params[key];
  }
  return tempParams;
}

export async function getRecipes(jwtToken: string): Promise<string> {
  //Todo define interface all other option parameters too

  var rawRecipeData="";
  var params = {
    limit: 10,
    maxMissingFoods: 5,
    maxMissingTools: 5,
    orderDirection: "desc",
    includeFoodsOnHand: true,
    includeToolsOnHand: true,
  };
  var paramsString = formatParamsToString(params);
  await axios({
    method: "get",
    url: `${baseUrl}/recipes/suggestions` + paramsString,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: "Bearer " + jwtToken,
    },
  })
    .then((response) => {
	  rawRecipeData= response.request?.response
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
      return "";
    });
  return rawRecipeData;
}
