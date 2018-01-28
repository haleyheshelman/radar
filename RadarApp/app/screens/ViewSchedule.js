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
            <View style={styles.global.mainContainer}>
                {/* <DutyHeader hall={state.params.hallName}/> */}
                <ImageBackground source={require('./../images/bg2.png')} style={styles.global.mainContainer}>
                <Header headerText="Duty Schedule" hall="WEASTIES" floor="1"/>
                <View style={styles.global.secondaryContainer}>
                    <Text style={styles.global.secondaryHeadingText}>Next Duty:</Text>
                    <Text style={styles.global.text}>Friday, PLACEHOLDER DATE</Text>
                    <Text></Text>
                </View>
                <View style={styles.global.secondaryContainer}>
                    {/* list of WeeklyDutyComponents*/}
                    <Text style={styles.global.secondaryHeadingText}>Week 2</Text>
                    <Text style={styles.global.tertiaryHeadingText}>Friday, PLACEHOLDER DATE</Text>
                    <SingleContact
                        role={testRA.role}
                        name={testRA.name}
                    />
                    <SingleContact
                        role={testGA.role}
                        name={testGA.name}
                    />
                    <Text style={styles.global.tertiaryHeadingText}>Saturday, PLACEHOLDER DATE</Text>
                    <SingleContact
                        role={testRA.role}
                        name={testRA.name}
                    />
                    <SingleContact
                        role={testGA.role}
                        name={testGA.name}
                    />
                </View>
                </ImageBackground>
            </View>
        );
    }
}

export default ViewSchedule;