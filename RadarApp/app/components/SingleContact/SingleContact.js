import React, {PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from './styles';

// import {CallIcon} from '../CallIcon';

const SingleContact = ({role, name}) => { //here name is an object
    const firstName = name.first.toString();
    const lastName = name.last.toString();
    const fullName = firstName + " " + lastName;

    const roleName = role.toString();

    return (
        <View style = {styles.singleContactContainer}>
            <Text>{roleName}</Text>
            <Text>{fullName}</Text>
            {/* <CallIcon numberToCall = {phone}/> */}
            {/* <CallIcon/> */}
        </View>
    )
    
};

// SingleButton.PropTypes = { //basic typechecking
//     hall: PropTypes.string,
//     //name: PropTypes., //object?
//     phone: PropTypes.string,
// };

export default SingleContact;
