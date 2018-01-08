import React from 'react';
import { StackNavigator} from 'react-navigation';

import LoginScreen from './app/screens/Login';
import DutyLandingScreen from './app/screens/DutyLanding';

const App = StackNavigator({
  Login: {screen: LoginScreen},
  DutyLanding: {screen: DutyLandingScreen},
})

export default App;