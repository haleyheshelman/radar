import React, { Component, PropTypes } from 'react';

import colors from '../styles/colorscheme';
import {StandardButton} from '../components/StandardButton';
import {Header} from './../components/Header';
import {testRA, testGA} from '../config/testData';

import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import styles from './../styles/style';
import SingleContact from '../components/SingleContact/SingleContact';


class ViewSchedule extends Component { //need to pass PERSON in as a prop
    // static navigationOptions = ({navigation}) => {
    //     return {
    //         hallName: navigation.state.params.hallName,
    //     }
    // }
    render() {
        const {stage, navigation} = this.props.navigation;
        return (
            <View>
                {/* <DutyHeader hall={state.params.hallName}/> */}
                <Header headerText="Duty Schedule" hall="WEASTIES" floor="1"/>

                <View>
                    <Text>Next Duty:</Text>
                    <Text>Friday, PLACEHOLDER DATE</Text>
                </View>

                <View>
                    {/* list of WeeklyDutyComponents*/}
                    <Text>Week 2</Text>
                    <Text>Friday, PLACEHOLDER DATE</Text>
                    <SingleContact
                        role={testRA.role}
                        name={testRA.name}
                    />
                    <SingleContact
                        role={testGA.role}
                        name={testGA.name}
                    />

                    <Text>Saturday, PLACEHOLDER DATE</Text>
                    <SingleContact
                        role={testRA.role}
                        name={testRA.name}
                    />
                    <SingleContact
                        role={testGA.role}
                        name={testGA.name}
                    />
                </View>
            </View>
        );
    }
}

export default ViewSchedule;