// import { Stack,Navigator } from "expo-router";

import {GlobalProvider} from './contexts/GlobalContext';
import Main from "./pages/Main";

export default function RootLayout() {

  return (
    <GlobalProvider>
        <Main/>
    </GlobalProvider>
  );
}
