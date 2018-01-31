import React, { Component, PropTypes} from 'react';

import {StandardButton} from '../components/StandardButton';
import {Header} from './../components/Header';
import {SingleContact} from '../components/SingleContact';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

import styles from './../styles/style';

import {testRA, testGA} from '../config/testData';
// ^^this'll change to an actuall firebase call to get the relevant RA

//TODO: FlatList component of SingleContact items (ContactList.js)
//Potentially, also make a DutyCard item consisting of Date+ContactList????

class DutyLanding extends Component {
    render() {
        const {navigate} = this.props.navigation;
        const hallName = testRA.hall.toString();
        const raName = testRA.name.first.toString()+ " " + testRA.name.last.toString();
        const raFloor = testRA.floor.toString();
        return (
            <View style={styles.global.mainContainer}>
                <ImageBackground source={require('./../images/bg2.png')} style={styles.global.mainContainer}>
                <Header headerText={raName} hall={hallName} floor={raFloor}/>
                <View style={styles.global.secondaryContainer}>
                    <Text style={styles.global.secondaryHeadingText}>Next Duty:</Text>
                    <Text style={styles.global.text}>Week {testRA.nextDuty.week.toString()}, {testRA.nextDuty.date.toString()}</Text>
                    <Text></Text>
                </View>
                <View style={styles.global.secondaryContainer}>
                    <Text style={styles.global.secondaryHeadingText}>Current Duty for {testRA.hall.toString()}:</Text>
                    <SingleContact //TODO: convert to FlatList for dynamic size
                        role={testRA.role}
                        name={testRA.name}
                        />
                    <SingleContact
                        role={testGA.role}
                        name={testGA.name}
                        />
                </View>
                <View style={styles.global.verticalButtonContainer}>
                    <StandardButton text="View Schedule" onPress={() => navigate('ViewSchedule')}/>
                    <StandardButton text="View Duty Swap Board" onPress={() => navigate('SwapBoard')}/>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

export default DutyLanding;