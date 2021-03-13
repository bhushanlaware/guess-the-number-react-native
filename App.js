import React from 'react';
import { BottomNavigation, DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TopAppbar from './src/components/Layouts/TopAppbar';
import AboutScreen from './src/Screens/AboutScreen';
import HomeScreen from './src/Screens/HomeScreen';
import BluePink from './src/themes/OrangePurple';


const Darktheme = {
  ...DarkTheme,
  roundness: 2,
  mode: 'exact',
  colors: {
    ...DarkTheme.colors,
    ...BluePink
  },
};
const Lighttheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    ...BluePink
  },
};
const routes = [
  { key: 'home', title: 'Play', icon: 'play' },
  { key: 'about', title: 'About', icon: 'information-outline' },
];



const renderScene = BottomNavigation.SceneMap({
  home: HomeScreen,
  about: AboutScreen,
});
export default function App() {
  const [index, setIndex] = React.useState(0);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  // console.log(colors)
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <PaperProvider theme={isDarkTheme ? Darktheme : Lighttheme}>
      <TopAppbar title='Guess the Number (1-100) 🧐' toggleTheme={toggleTheme}></TopAppbar>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}></BottomNavigation>
    </PaperProvider>
  );
}
