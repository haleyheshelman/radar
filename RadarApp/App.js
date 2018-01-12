import React from 'react';
import { StackNavigator} from 'react-navigation';

import * as firebase from 'firebase';
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

const firebaseConfig = {
    apiKey: "AIzaSyB2fTVAiHoac7oSicifltldkwb8-cT-MBw",
    authDomain: "vash-radar.firebaseapp.com",
    databaseURL: "https://vash-radar.firebaseio.com",
    projectId: "vash-radar",
    storageBucket: "vash-radar.appspot.com",
    messagingSenderId: "295841063943"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);




export default App;