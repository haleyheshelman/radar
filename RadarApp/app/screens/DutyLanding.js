import React, { Component, PropTypes } from 'react';

import colors from '../styles/colorscheme';
import {StandardButton} from '../components/StandardButton';
import {Header} from './../components/Header';
import {SingleContact} from '../components/SingleContact';
import { View, StyleSheet, Text } from 'react-native';

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
            <View>
                <Header headerText={raName} hall={hallName} floor={raFloor}/>

                <View>
                    <Text>Next Duty:</Text>
                    <Text>Week {testRA.nextDuty.week.toString()}, {testRA.nextDuty.date.toString()}</Text>
                    <Text></Text>
                </View>
                <View>
                    <Text>Current Duty for {testRA.hall.toString()}:</Text>
                    <SingleContact //TODO: convert to FlatList for dynamic size
                        role={testRA.role}
                        name={testRA.name}
                        />
                    <SingleContact
                        role={testGA.role}
                        name={testGA.name}
                        />
                </View>
                <View>
                    <StandardButton text="View Schedule" onPress={() => navigate('ViewSchedule')}/>
                    <StandardButton text="View Duty Swap Board" onPress={() => navigate('SwapBoard')}/>
                </View>
            </View>
        );
    }
}

export default DutyLanding;