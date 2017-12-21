import React, {PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from './styles';

// import {CallIcon} from '../CallIcon';

const SingleContact = ({hall, name, phone}) => {
    const fullName = '{name.first} {name.last}';

    return (
        <View style = {styles.singleContactContainer}>
            <Text>{hall}</Text>
            <Text>{fullName}</Text>
            {/* <CallIcon numberToCall = {phone}/> */}
            <CallIcon/>
        </View>
    )
    
};

// SingleButton.PropTypes = { //basic typechecking
//     hall: PropTypes.string,
//     //name: PropTypes., //object?
//     phone: PropTypes.string,
// };

export default SingleContact;
