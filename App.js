import React from 'react';
import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  adaptNavigationTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Router from './src/router';

const {LightTheme} = adaptNavigationTheme({
  light: NavigationDefaultTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};

const App = () => {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Router initialRouteName={initialRouteName} />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;