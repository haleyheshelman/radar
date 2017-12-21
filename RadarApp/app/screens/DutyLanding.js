import React, { Component, PropTypes } from 'react';

import colors from '../config/colorscheme';
import {StandardButton} from '../components/StandardButton';
import { View } from 'react-native';

import {testContact} from '../config/testData';
//TODO: FlatList component of SingleContact items (ContactList.js)
//Potentially, also make a DutyCard item consisting of Date+ContactList????

class DutyLanding extends Component {
    state = {  }
    render() {
        return (
            <View>
                <View>
                    <Image/>
                    <Text>{testContact.name}</Text>
                    <Text>{testContact.hall}, {testContact.floor}</Text>
                </View>

                <View>
                    <Text>Next Duty:</Text>
                    <Text>{testContact.nextDuty}</Text>
                </View>
                {/* <View>
                    <Text>Current Duty for {hall}:</Text>
                    <SingleContact
                        hall={hall}
                        name={name}
                        phone={phone}
                        ></SingleContact>
                </View> */}
            </View>
        );
    }
}

//export default connect(, )(DutyLanding);