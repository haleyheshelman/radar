import React, { Component, PropTypes } from 'react';

import colors from '../styles/colorscheme';
import {StandardButton} from '../components/StandardButton';
import {SingleContact} from '../components/SingleContact';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

import styles from './../styles/style';

import {testRA, testGA} from '../config/testData';
// ^^this'll change to an actuall firebase call to get the relevant RA

//TODO: FlatList component of SingleContact items (ContactList.js)
//Potentially, also make a DutyCard item consisting of Date+ContactList????

class DutyLanding extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>{testRA.name.first.toString()} {testRA.name.last.toString()}</Text>
                    <Text>{testRA.hall.toString()} {testRA.floor.toString()}</Text>
                    <Text></Text>
                </View>

                <View>
                    <Text>Next Duty:</Text>
                    <Text>Week {testRA.nextDuty.week.toString()}, {testRA.nextDuty.date.toString()}</Text>
                    <Text></Text>
                </View>
                <View>
                    <Text>Current Duty for {testRA.hall.toString()}:</Text>
                    <SingleContact //TODO: convert to FlatList for dynamic size
                        role={testRA.role.toString()}
                        name={testRA.name}
                        phone={testRA.phone.toString()}
                        ></SingleContact>
                    <SingleContact
                        role={testGA.role.toString()}
                        name={testGA.name}
                        phone={testGA.phone.toString()}
                        ></SingleContact>
                </View>
            </View>
        );
    }
}

export default DutyLanding;