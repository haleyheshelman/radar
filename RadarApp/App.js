import React from 'react';
import { StackNavigator} from 'react-navigation';

import LoginScreen from './app/screens/Login';
import DutyLandingScreen from './app/screens/DutyLanding';
import ViewScheduleScreen from './app/screens/ViewSchedule';
import SwapBoardScreen from './app/screens/SwapBoard';

const App = StackNavigator({
  Login: {screen: LoginScreen},
  DutyLanding: {screen: DutyLandingScreen},
  ViewSchedule: {screen: ViewScheduleScreen},
  SwapBoard: {screen: SwapBoardScreen},
})

export default App;