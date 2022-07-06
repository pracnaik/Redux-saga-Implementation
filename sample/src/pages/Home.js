import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useReducer } from 'react';
import {store} from '../redux-saga/Store';
import { User } from '../redux-saga/Action/Action';
import Reducer from '../redux-saga/Reducer/Reducer';
import { rootReducer } from '../redux-saga/Reducer/mainReducer';
import {useDispatch, useSelector} from 'react-redux'; 

const Home = () => {
  // console.log('in home',store.getState().Reducer);
  const userData = useSelector(state => state.Reducer);
  const name = userData?.User;
  console.log('@@@@@@@@',userData);
  const dispatch = useDispatch();

  const handleClear =()=>{
    dispatch({type:'CLEAR_REQUEST'})  
  }
  return (
    <View style={styles.main}>
      {/* <Text>home</Text> */}
      <FlatList
        data={name}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return(
            <View style={styles.container} >
            <Text style={styles.title}>
            {console.log('!!!!!!',item.fname)}
                      {item.fname} {''} {item.lname}
                    </Text>
                    </View>
          )
        }}
        />
        <TouchableOpacity style={styles.loginBtnContainer}
         onPress={handleClear}>
          <Text>clear</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main:{
    marginTop:20
  },
  container: {
    borderWidth : 1,
    padding:2,
    margin:5,
    // flex: 1,
    // backgroundColor: '#ffff'
  },
  title: {
    padding: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  loginBtnContainer: {
    width: '90%',
    height: 50,
    padding: 10,
    backgroundColor: '#a832a6',
    fontSize: 10,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    borderRadius: 20,
},
})