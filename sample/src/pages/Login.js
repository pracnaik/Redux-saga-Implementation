import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const Login = () => {
  return (
    <View style = {{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }}>
      {/* <Text>login</Text> */}
      <Button
      title = {'submit'}
      disabled = {true}
      />
    </View>
  )
}

export default Login