import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_BASEURL;

export async function generateToken(): Promise<string> {
  var postData = {
    username: process.env.EXPO_PUBLIC_USER,
    password: process.env.EXPO_PUBLIC_PASS,
  };
  var tempAccessToken: string = "";
  // Passing configuration object to axios
  await axios({
    method: "post",
    url: `${baseUrl}/auth/token`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    data: postData,
  })
    .then((response) => {
      tempAccessToken = response.data.access_token;
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
      return "";
    });
  return tempAccessToken;
}
