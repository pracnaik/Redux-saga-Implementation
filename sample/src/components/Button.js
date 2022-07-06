import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';

const Button = (props) => {
    const {title, ...restprop} = props;
  return (
        <TouchableOpacity 
        
        style={{
        borderWidth :1,
        padding : 10
    }}>
            <Text>{title}</Text>
        </TouchableOpacity>

  )
}


export default Button