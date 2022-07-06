import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    View,
    ActivityIndicator,
    SafeAreaView,
    StatusBar,
    Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux'; 
import { User } from '../redux-saga/Action/Action';

const Register = ({ navigation }) => {
    const [fname, setFname] = useState('');
    const [fnameval, setFnameval] = useState('');
    const [lname, setLname] = useState('');
    const [lnameval, setLnameval] = useState('');
    
    const [loading, setloading] = useState(true);
    const user = {
        'fname' : fname,
        'lname' : lname
    }
    const dispatch = useDispatch();

    const fnamevalidation = text => {
        const reg = /^[A-Za-z][A-Za-z]{2,15}$/;
        if (reg.test(text) === true) {
            setFnameval('');
            setFname(text);
        } else {
            setFnameval('enter valid name');
            setFname(text);
        }
    };
    const lnamevalidation = text => {
        const reg = /^[A-Za-z][A-Za-z]{2,15}$/;
        if (reg.test(text) === true) {
            setLnameval('');
            setLname(text);
        } else {
            setLnameval('enter valid name');
            setLname(text);
        }
    };
    
    const checkingcredential = () => {
        if (fname == '' || lname == '') {

            Alert.alert('please enter valid credentials');
        } else {
            // toLogin();
            // onPostData();
            submit();
            setFname('');
            setLname('');
           
        }
    };

    const submit = () => {
        // alert('Done!')
        dispatch({type:'USER_FETCH_REQUESTED',payload : user});
        navigation.navigate('Home')
        setFname('');
        setLname('');
    };

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                {/* <ScrollView style={styles.scrollView}> */}
               <View style={styles.content}>
                <View>
                    <Text style={styles.inputTitle}>First Name</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Prachi'
                            onChangeText={(text) => fnamevalidation(text)}
                            value={fname}
                            placeholderTextColor="gray"
                        // onChangeText={(val) => this.handleEmail(val)}

                        />
                        
                    </View>
                    {/* <Text style={styles.errorMsg}>{fnameval}</Text> */}
                </View>

                <View>
                    <Text style={styles.inputTitle}>Last Name</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Naik'
                            onChangeText={(text) => lnamevalidation(text)}
                            value={lname}
                            placeholderTextColor="gray"
                        // onChangeText={(val) => this.handleEmail(val)}

                        />
                        {/* <Icon name={Platform.OS === "ios" ? "ios-mail" : "md-mail"} size={20} color="grey" /> */}

                    </View>
                    {/* <Text style={styles.errorMsg}>{lnameval}</Text> */}
                </View>

              
                {/* {loading ? */}
                    <TouchableOpacity style={styles.loginBtnContainer}
                    onPress={() => submit()}
                    // onPress={() => this.toLogin()}
                    // onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.loginText}
                            // onPress={() => checkingcredential()}
                        >Register</Text>
                    </TouchableOpacity>
                    {/* : <ActivityIndicator color='#fc03e3' size={20} />} */}
            </View>
            </View>
        </KeyboardAwareScrollView>
    )

};

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingHorizontal: 10
        // flex: 1,
        // padding: 8,
        // backgroundColor: '#fff'
        // flex: 1,
        // justifyContent: 'center',
        // backgroundColor: '#fff',
        // paddingBottom: 20,
        // padding: 8,
        // paddingTop: StatusBar.currentHeight + 100,
    },
    content: {
        alignItems: 'center',
        // flex: 1,
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        marginTop: 60
      },
    scrollView: {
        marginHorizontal: 20,
    },
    heading: {
        marginBottom: 20,
        fontSize: 40,
        marginTop:20,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 30,
        // padding: 24,
        color: '#8B0000'
    },
    inputTitle: {
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        paddingBottom: 10
        // marginLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 0.5,
        marginBottom: 5,
        alignItems: "stretch",
        paddingBottom: 10,
        // marginHorizontal: 15,
        alignSelf: "center",
    },
    inputText: {
        width: '100%',
        // height: 50,
        // left: 10,
        fontSize: 15,
        alignSelf: "stretch",
        color: '#000'
    },
    inputText1: {
        width: '95%',
        // height: 50,
        // left: 10,
        fontSize: 15,
        alignSelf: "stretch",
        color: '#000'
    },
    errorMsg: {
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        // marginBottom: 15,
        paddingBottom: 20,
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
    loginText: {
        color: 'white',
        fontSize: 18,
    },
    registerContainer: {
        // marginTop: 20,
        alignSelf: "center",
    },
    registerText: {
        color: "#000"
    },
    radioView: {
        flexDirection: 'row',
        padding: 6,
        paddingTop: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        padding: 4,
        color: '#000',
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});


export default Register;